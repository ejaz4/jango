package vc.hs.stella.jango;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.webkit.CookieManager;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.TextView;
import android.widget.Toast;

import org.w3c.dom.Text;

import java.util.Random;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        WebView browser = (WebView) findViewById(R.id.webview);
        browser.setWebViewClient(new WebViewClient(){

            public void onPageFinished(WebView view, String url) {
                browser.loadUrl("javascript:var style = document.createElement(\"style\"); style.innerText = \"body { -webkit-tap-highlight-color: rgba(0,0,0,0) !important; }\"; var script = document.createElement(\"script\"); script.setAttribute(\"src\", \"https://ejaz4.github.io/jango/appcontent/appjs1.js\"); document.body.appendChild(style);\n" +
                        "document.body.appendChild(script);");
                browser.setVisibility(View.VISIBLE);
            }
            public void doUpdateVisitedHistory (WebView view, String url, boolean isReload){
                if (url.contains("https://micro.alles.cx/replies")){
                    Context context = getApplicationContext();
                    CharSequence text = "Notifications are not yet available in Jango, sorry ☹.";
                    int duration = Toast.LENGTH_LONG;
                    Toast toast = Toast.makeText(context, text, duration);
                    toast.show();
                }
            }
            public void onPageStarted (WebView view, String url, Bitmap favicon) {
                browser.setVisibility(View.GONE);
                TextView loading = (TextView) findViewById(R.id.textView3);
                Random rand = new Random();
                int num = rand.nextInt((5 - 1) + 1) + 1;
                if (num == 1) {
                    loading.setText(getString(R.string.loading));
                }
                if (num == 2) {
                    loading.setText(getString(R.string.slacking_off_text));
                }
                if (num == 3) {
                    loading.setText("bleep bloop 👾");
                }
                if (num == 4) {
                    loading.setText(getString(R.string.udlr));
                }
                if (num == 5) {
                    loading.setText("cool");
                }
            }
        });
        WebSettings webSettings = browser.getSettings();
        webSettings.setJavaScriptEnabled(true);
        CookieManager.getInstance().setAcceptCookie(true);
        browser.loadUrl("https://alles.cx");
    }

    @Override
    public void onBackPressed() {
        WebView browser = (WebView) findViewById(R.id.webview);
        if (browser.canGoBack() == true){
            browser.goBack();
        } else{
            finish();
        }
    }
}
