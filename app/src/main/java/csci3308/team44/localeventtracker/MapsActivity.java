/*package csci3308.team44.localeventtracker;

import android.support.v4.app.FragmentActivity;
import android.os.Bundle;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

public class MapsActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }


    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.

    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;

        // Add a marker in Sydney and move the camera
        LatLng sydney = new LatLng(-34, 151);
        mMap.addMarker(new MarkerOptions().position(sydney).title("Marker in Sydney"));
        mMap.moveCamera(CameraUpdateFactory.newLatLng(sydney));
    }
}
*/
package csci3308.team44.localeventtracker;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.GoogleMap.OnMapLongClickListener;
import com.google.android.gms.maps.LocationSource;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.model.MarkerOptions;

import com.android.volley.toolbox.JsonObjectRequest;

import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.view.MenuItem;
import android.widget.TextView;
import android.os.Bundle;
import android.Manifest;
import android.content.pm.PackageManager;
import android.location.Location;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;

/*
 * This shows how to use a custom location source.
*/
public class MapsActivity extends AppCompatActivity implements OnMapReadyCallback {

    private GoogleMap mMap;
    private TextView mTextMessage;
    String url = "http://138.197.207.68/api";
    HashMap<String, String> apiHeaders = new HashMap<String, String>();
    JSONObject data;

    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            switch (item.getItemId()) {
                case R.id.navigation_home:
                    mTextMessage.setText(R.string.title_map);
                    //setTitle("new title");
                    return true;
                case R.id.navigation_dashboard:
                    mTextMessage.setText(R.string.title_list);
                    return true;
                case R.id.navigation_add:
                    mTextMessage.setText(R.string.title_add);
                    return true;
                case R.id.navigation_user:
                    mTextMessage.setText("Settings");
                    return true;
            }
            return false;
        }
    };
    /**
     * A {@link LocationSource} which reports a new location whenever a user long presses the map
     * at
     * the point at which a user long pressed the map.
     */
    private class LongPressLocationSource implements LocationSource, OnMapLongClickListener {

        private OnLocationChangedListener mListener;

        /**
         * Flag to keep track of the activity's lifecycle. This is not strictly necessary in this
         * case because onMapLongPress events don't occur while the activity containing the map is
         * paused but is included to demonstrate best practices (e.g., if a background service were
         * to be used).
         */
        private boolean mPaused;

        @Override
        public void activate(OnLocationChangedListener listener) {
            mListener = listener;
        }

        @Override
        public void deactivate() {
            mListener = null;
        }

        @Override
        public void onMapLongClick(LatLng point) {
            if (mListener != null && !mPaused) {
                Location location = new Location("LongPressLocationProvider");
                location.setLatitude(point.latitude);
                location.setLongitude(point.longitude);
                location.setAccuracy(100);
                mListener.onLocationChanged(location);
            }
        }

        public void onPause() {
            mPaused = true;
        }

        public void onResume() {
            mPaused = false;
        }
    }

    private LongPressLocationSource mLocationSource;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);

        mLocationSource = new LongPressLocationSource();

        SupportMapFragment mapFragment =
                (SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
       // mTextMessage = (TextView) findViewById(R.id.message);
        //BottomNavigationView navigation = (BottomNavigationView) findViewById(R.id.navigation);
        //navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);
       /*Button btn = findViewById(R.id.navigation_settings);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent2 = new Intent(getApplicationContext(), LoginActivity.class);
                startActivity(intent2);
            }
        });*/
    }

    @Override
    protected void onResume() {
        super.onResume();
        mLocationSource.onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        mLocationSource.onPause();
    }

    @Override
    public void onMapReady(GoogleMap map) {
        mMap = map;
        JSONObject outObject = new JSONObject();
        JsonObjectRequest jsObjRequest = new JsonObjectRequest(Request.Method.GET, url, outObject, new com.android.volley.Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                MapsActivity.this.data = response;
                displayData(response);
            }
        }, new Response.ErrorListener(){
            @Override
            public void onErrorResponse(VolleyError error){
                Toast.makeText(MapsActivity.this, "No Maps API call could be made", Toast.LENGTH_SHORT).show();
            }
        });

        MySingleton.getInstance(this).addToRequestQueue(jsObjRequest);

        RequestQueue queue = MySingleton.getInstance(this.getApplicationContext()).getRequestQueue();

        // Add a marker Boulder in sydney and move the camera
        LatLng boulder = new LatLng(40.014984,-105.270546);
        mMap.addMarker(new MarkerOptions().position(boulder).title("Marker in Boulder"));
        mMap.moveCamera(CameraUpdateFactory.newLatLng(boulder));
        map.setLocationSource(mLocationSource);
        map.setOnMapLongClickListener(mLocationSource);

        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
            //                                          int[] grantResults)
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            map.setMyLocationEnabled(true);
            return;
        }

    }

    private void dropPin(double lat, double lng) {
        mMap.addMarker(new MarkerOptions().position(new LatLng(lat,lng)).title("Marker"));

    }

    public void displayData(JSONObject dataIN) {
        //MainActivity.this.data = dataIN;
        //Toast.makeText(MainActivity.this, data.toString(), Toast.LENGTH_LONG).show();

        try {
            JSONObject events = data.getJSONObject("events");
            int num = events.getJSONArray("event").length();
            for ( int i=0; i<=num; i++ ) {
                Object dat = events.getJSONArray("event").get(i);
                double lat = new Double(((JSONObject) dat).get("latitude").toString());
                double lng = new Double(((JSONObject) dat).get("longitude").toString());

                dropPin(lat, lng);
            }
        }
        catch (JSONException e) {
            e.printStackTrace();
        }


        try {
            Object dat = dataIN.getJSONArray("event").get(1);
            dat = (JSONObject) dat;
            double lat = new Double(((JSONObject) dat).get("lat").toString());
            double lng = new Double(((JSONObject) dat).get("lng").toString());

        }
        catch (JSONException e) {
            e.printStackTrace();
        }
    }
}


