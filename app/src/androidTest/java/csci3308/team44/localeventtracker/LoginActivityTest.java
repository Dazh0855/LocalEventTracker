package csci3308.team44.localeventtracker;

import android.content.Context;
import android.support.test.InstrumentationRegistry;
import android.support.test.filters.LargeTest;
import android.support.test.rule.ActivityTestRule;
import android.support.test.runner.AndroidJUnit4;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import android.support.test.espresso.Espresso;
import android.view.View;

import static android.support.test.espresso.Espresso.closeSoftKeyboard;
import static android.support.test.espresso.Espresso.onView;
import static android.support.test.espresso.action.ViewActions.click;
import static android.support.test.espresso.action.ViewActions.typeText;
import static android.support.test.espresso.assertion.ViewAssertions.matches;
import static android.support.test.espresso.matcher.ViewMatchers.isDisplayed;
import static android.support.test.espresso.matcher.ViewMatchers.withId;
import static android.support.test.espresso.matcher.ViewMatchers.withText;
import static org.junit.Assert.*;

/**
 * Instrumentation test, which will execute on an Android device.
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
@RunWith(AndroidJUnit4.class)
@LargeTest
public class LoginActivityTest {

    @Rule
    public ActivityTestRule<LoginActivity> mActivityRule = new ActivityTestRule(LoginActivity.class);
    private LoginActivity loginActivity;

    @Before
    public void setActivity() {
        loginActivity = mActivityRule.getActivity();
    }

    @Test
    public void useLoginPage() throws Exception {
        onView(withId(R.id.email)).perform(typeText("first.last@colorado.edu"));
        onView(withId(R.id.password)).perform(typeText("asdf123"));
        closeSoftKeyboard();

        onView(withId(R.id.email_sign_in_button)).perform(click());

        onView(withId(R.id.map)).check(matches(isDisplayed()));
    }
}
