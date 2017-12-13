package csci3308.team44.localeventtracker;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.GoogleMap.OnMapLongClickListener;
import com.google.android.gms.maps.LocationSource;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;
import android.util.Log;

import java.io.FileReader;
import java.io.File;
import java.io.IOException;
//import com.jayway.restassured.path.json.JsonPath
import java.io.BufferedReader;

import org.json.JSONException;
import org.json.JSONObject;
//import java.net.{URL, URLEncoder}
import com.android.volley.toolbox.JsonObjectRequest;

import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;
import android.os.Bundle;
import android.Manifest;
import android.content.pm.PackageManager;
import android.location.Location;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

/*
 * This shows how to use a custom location source.
*/
public class MapsActivity extends AppCompatActivity implements OnMapReadyCallback {

    private GoogleMap mMap;
    private TextView mTextMessage;

    String zipsent = "";
    String intLat;
    String intLon;
    String url = "http://165.227.7.154/api/getEvent";

    HashMap<String, String> apiHeaders = new HashMap<String, String>();
    JSONObject data;

    public void getLatLon (String zipSearch) throws IOException {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(
                    new InputStreamReader(getAssets().open("ZipCodes.txt")));

            // do reading, usually loop until end of file reading
            String mLine;
            while ((mLine = reader.readLine()) != null) {
                //process line
                String[] split = mLine.trim().split(",");
                if (split.length < 1)
                {
                    break;//return null;
                }

                String ord = split[0];
                if (ord.equals(zipSearch))
                {

                    intLat = split[1];
                    if(split[2].substring(0,1) == " ") {
                        intLon = split[2].substring(1);
                    }
                    else intLon = split[2];
                    break;
                }
            }

        } catch (IOException e) {
            //log the exception
            Toast.makeText(MapsActivity.this,"Didnt read file properly", Toast.LENGTH_SHORT).show();
            e.printStackTrace();
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    //log the exception
                    e.printStackTrace();
                }
            }
        }
    }

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

        Bundle bundle = getIntent().getExtras();
        zipsent = bundle.getString("mZip");

        mLocationSource = new LongPressLocationSource();

        SupportMapFragment mapFragment =
                (SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
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
        /**
         * Zip code decoded to lat and long should be placed here
         */
        try {
            getLatLon(zipsent);
        } catch (IOException e) {
            e.printStackTrace();
        }
        boolean cancel = false;
        View focusView = null;
        RequestQueue MyRequestQueue = Volley.newRequestQueue(this);

        StringRequest MyStringRequest = new StringRequest(Request.Method.POST, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                //This code is executed if the server responds, whether or not the response contains data.
                //The String 'response' contains the server's response.
                JSONObject obj = null;
                try {
                    obj = new JSONObject(response);
                } catch (JSONException e) {
                    Log.e("onMapReady", "unexpected JSON exception", e);
                }
                displayData(obj);
                Log.d("Response", response);
            }
        }, new Response.ErrorListener() { //Create an error listener to handle errors appropriately.
            @Override
            public void onErrorResponse(VolleyError error) {
                mTextMessage.setError("Server could not be reached");
                mTextMessage.requestFocus();
            }
        }) {
            protected Map<String, String> getParams() {
                Map<String, String> MyData = new HashMap<String, String>();
                MyData.put("latitude", intLat);
                MyData.put("longitude", intLon);
                MyData.put("radius", "30");
                return MyData;
            }
        };

        try {
            MyRequestQueue.add(MyStringRequest);
        } catch (Exception e) {
            e.printStackTrace();
        }

        mMap = map;

        // Add a marker Boulder in sydney and move the camera
        double parsedLat = Double.parseDouble(intLat);
        double parsedLon = Double.parseDouble(intLon);
        LatLng myCity = new LatLng(parsedLat,parsedLon);
        mMap.addMarker(new MarkerOptions().position(myCity).title("You are around Here!"));
        mMap.moveCamera(CameraUpdateFactory.newLatLng(myCity));
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

    private void dropPin(double lat, double lng, String description, String title) {
        if(description == "null") {
            mMap.addMarker(new MarkerOptions().position(new LatLng(lat, lng)).title(title));
        }
        else {
            mMap.addMarker(new MarkerOptions().position(new LatLng(lat, lng)).title(title).snippet(description));
        }

    }

    public void displayData(JSONObject dataIN) {
        //MainActivity.this.data = dataIN;
        //Toast.makeText(MainActivity.this, data.toString(), Toast.LENGTH_LONG).show();

        try {
            JSONObject events = dataIN.getJSONObject("events");
            int num = events.getJSONArray("event").length();
            for ( int i=0; i<=num; i++ ) {
                Object dat = events.getJSONArray("event").get(i);
                double lat = new Double(((JSONObject) dat).get("latitude").toString());
                double lng = new Double(((JSONObject) dat).get("longitude").toString());
                String description = new String(((JSONObject) dat).get("description").toString());
                String title = new String(((JSONObject) dat).get("title").toString());

                dropPin(lat, lng, description, title);
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



