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
    String url = "http://138.197.207.68/api";

    int FinalLat = 0;
    int FinalLong = 0;

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
                Toast.makeText(MapsActivity.this,ord, Toast.LENGTH_SHORT).show();
                if (ord.equals(zipSearch))
                {

                    intLat = split[1];
                    intLon = split[2].substring(1);
                    break;
                }
            }
        } catch (IOException e) {
            //log the exception
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
        Toast.makeText(MapsActivity.this,"Didnt read file properly", Toast.LENGTH_SHORT).show();
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
        FinalLat = Integer.parseInt(intLat);
        FinalLong = Integer.parseInt(intLon);

        final String latVar = "39.979999";
        final String longVar = "-105.248737";
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
                MyData.put("latitude", latVar);
                MyData.put("longitude", longVar);
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
        LatLng boulder = new LatLng(FinalLat,FinalLong);
        mMap.addMarker(new MarkerOptions().position(boulder).title("You are around Here!"));
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



