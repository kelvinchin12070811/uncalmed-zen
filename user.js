// Enable AI Chat sidebar
user_pref("browser.ml.chat.enabled", true);
user_pref("browser.ml.chat.shortcuts", true);
user_pref("browser.ml.chat.shortcuts.custom", true);
user_pref("browser.ml.chat.sidebar", true);
user_pref("browser.ml.enable", true);
user_pref("browser.ml.chat.provider", "https://gemini.google.com");

// Re-enabled "Enhanced Tracking Protection" icon
user_pref("zen.urlbar.show-protections-icon", true);

// Temporary Workaround -- Tab unload
user_pref("browser.low_commit_space_threshold_percent", 100);
user_pref("browser.tabs.min_inactive_duration_before_unload", 600000); // 10 minutes in ms
user_pref("browser.tabs.unloadOnLowMemory", true);
