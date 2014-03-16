/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        try {
            alert('Device is ready! Write your app id below .For demo i put my app id there.');
            FB.init({ appId: "515942511796313", nativeInterface: CDV.FB, useCachedDialogs: false });
            document.getElementById('data').innerHTML = "";
        }
        catch (e) {
            alert(e);
        }

        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function login() {
                FB.login(
                         function(response) {
                         if (response.session) {
                         alert('you are logged in');
                         } else {
                         alert('you are not logged in');
                         }
                         },
                         { scope: "email" }
                         );
            }

function logout() {
                FB.logout(function(response) {
                          alert('logged out');
 });
 }

 function getLoginStatus() {
                FB.getLoginStatus(function(response) {
                                  if (response.status == 'connected') {
                                  alert('You are connected to Fb');
                                  } else {
                                  alert('not connected to FB');
                                  }
                                  });
            }

function post_something(){
    FB.ui({
        method: 'feed',
        name: 'I\'m using the Hackbook web app',
        caption: 'Hackbook for Mobile Web.',
        description: 'Check out Hackbook for Mobile Web to learn how you can make your web apps social using Facebook Platform.',
        link: 'http://apps.facebook.com/mobile-start/',
        picture: 'http://www.facebookmobileweb.com/hackbook/img/facebook_icon_large.png',
        actions: [{ name: 'Get Started', link: 'http://apps.facebook.com/mobile-start/' }],
    }, 
    function(response) {
        console.log('publishStory UI response: ', response);
    });
}