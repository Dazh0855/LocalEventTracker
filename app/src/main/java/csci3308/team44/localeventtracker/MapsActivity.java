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

import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.GoogleMap.OnMapLongClickListener;
import com.google.android.gms.maps.LocationSource;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;
import com.google.android.gms.maps.GoogleMap.OnCameraIdleListener;
import com.google.android.gms.maps.GoogleMap.OnMapClickListener;

import android.content.Intent;
import android.widget.TextView;
import android.os.Bundle;
import android.Manifest;
import android.content.pm.PackageManager;
import android.location.Location;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;

/*
 * This shows how to use a custom location source.
*/
public class MapsActivity extends AppCompatActivity implements OnMapReadyCallback {
    private GoogleMap mMap;

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

        // Add a marker in Sydney and move the camera
        LatLng sydney = new LatLng(-34, 151);
        mMap.addMarker(new MarkerOptions().position(sydney).title("Marker in Sydney"));
        mMap.moveCamera(CameraUpdateFactory.newLatLng(sydney));
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
}


