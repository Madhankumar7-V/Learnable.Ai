// Firebase configuration for Learnable.ai
// This file provides Firebase services for shared data storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgDXOavNymrGqkh0LUpaM8H5W0q8PnI2A",
  authDomain: "learnable-ai-a9b46.firebaseapp.com",
  projectId: "learnable-ai-a9b46",
  storageBucket: "learnable-ai-a9b46.firebasestorage.app",
  messagingSenderId: "935345173408",
  appId: "1:935345173408:web:3708306190c6b74991aac5",
  measurementId: "G-44VYB3T8J5"
};

// Wait for Firebase to load, then initialize
function initializeFirebase() {
  if (typeof firebase !== 'undefined') {
    try {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
      // Get Firebase services
      window.firebaseDb = firebase.database();
      window.firebaseAuth = firebase.auth();
      
      console.log('Firebase initialized successfully');
      
      // Enable the sync button
      const syncBtn = document.getElementById('syncLocalData');
      if (syncBtn) {
        syncBtn.disabled = false;
        syncBtn.textContent = '🔄 Sync Local Data';
      }
      
      return true;
    } catch (error) {
      console.error('Firebase initialization failed:', error);
      return false;
    }
  } else {
    console.warn('Firebase CDN not loaded yet, retrying...');
    return false;
  }
}

// Try to initialize Firebase immediately
if (!initializeFirebase()) {
  // If Firebase isn't loaded yet, wait for it
  const checkFirebase = setInterval(() => {
    if (initializeFirebase()) {
      clearInterval(checkFirebase);
    }
  }, 100);
  
  // Stop checking after 10 seconds
  setTimeout(() => {
    clearInterval(checkFirebase);
    console.error('Firebase failed to load after 10 seconds');
  }, 10000);
}

// Helper functions for Firebase operations
window.pushEventsToFirebase = async function(events) {
  if (!window.firebaseDb) {
    throw new Error('Firebase not initialized');
  }
  
  try {
    const updates = {};
    events.forEach((event, index) => {
      const eventKey = `event_${Date.now()}_${index}`;
      updates[`/events/${eventKey}`] = event;
    });
    
    await window.firebaseDb.ref().update(updates);
    console.log(`Successfully pushed ${events.length} events to Firebase`);
    return true;
  } catch (error) {
    console.error('Error pushing events to Firebase:', error);
    throw error;
  }
};

window.fetchFirebaseEvents = async function() {
  if (!window.firebaseDb) {
    throw new Error('Firebase not initialized');
  }
  
  try {
    const snapshot = await window.firebaseDb.ref('/events').once('value');
    const events = snapshot.val();
    
    if (!events) {
      return [];
    }
    
    // Convert object to array
    const eventsArray = Object.values(events);
    console.log(`Fetched ${eventsArray.length} events from Firebase`);
    return eventsArray;
  } catch (error) {
    console.error('Error fetching events from Firebase:', error);
    throw error;
  }
};

window.pushStudentProgressToFirebase = async function(studentId, progress) {
  if (!window.firebaseDb) {
    throw new Error('Firebase not initialized');
  }
  
  try {
    await window.firebaseDb.ref(`/studentProgress/${studentId}`).set(progress);
    console.log(`Successfully updated progress for student: ${studentId}`);
    return true;
  } catch (error) {
    console.error('Error updating student progress:', error);
    throw error;
  }
};

window.fetchStudentProgressFromFirebase = async function() {
  if (!window.firebaseDb) {
    throw new Error('Firebase not initialized');
  }
  
  try {
    const snapshot = await window.firebaseDb.ref('/studentProgress').once('value');
    const progress = snapshot.val();
    return progress || {};
  } catch (error) {
    console.error('Error fetching student progress:', error);
    throw error;
  }
};

// Shared Videos: push and fetch for cross-device sync
window.pushVideoToFirebase = async function(video) {
  if (!window.firebaseDb) {
    throw new Error('Firebase not initialized');
  }
  try {
    const id = video.id || `vid_${Date.now()}`;
    await window.firebaseDb.ref(`/videos/${id}`).set({ ...video, id });
    console.log(`Pushed video to Firebase: ${id}`);
    return id;
  } catch (error) {
    console.error('Error pushing video to Firebase:', error);
    throw error;
  }
};

window.fetchFirebaseVideos = async function() {
  if (!window.firebaseDb) {
    throw new Error('Firebase not initialized');
  }
  try {
    const snapshot = await window.firebaseDb.ref('/videos').once('value');
    const data = snapshot.val();
    if (!data) return [];
    const arr = Object.values(data);
    console.log(`Fetched ${arr.length} videos from Firebase`);
    return arr;
  } catch (error) {
    console.error('Error fetching videos from Firebase:', error);
    throw error;
  }
};

