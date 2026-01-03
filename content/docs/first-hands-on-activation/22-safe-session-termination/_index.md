---
title: "22. Safe Session Termination"
weight: 22
---

- ## Step 1: Application Shutdown Order
    
    Before shutting down the system:
    
    - Close **Tor Browser first**
        
    - Close any other open applications
        
    - Make sure nothing is still running in the background
        
    
    Why this matters:
    
    - Open apps may still be using the network
        
    - Closing them first avoids confusion or errors
        
    
    **Simple idea:**  
    Close apps first, shut down the system last.
    
    * * *
    
    ## Step 2: Persistent Volume Locking
    
    If you used **Persistent Storage** in **Tails OS**:
    
    - Make sure you properly exit the session
        
    - During shutdown, Tails will:
        
        - Lock the persistent storage automatically
    
    Important to understand:
    
    - Locked storage means data is protected
        
    - Never remove the USB while the system is still running
        
    
    **Simple idea:**  
    Let Tails lock your saved data before removing power.
    
    * * *
    
    ## Step 3: Network Disconnect Awareness
    
    As shutdown starts:
    
    - The system disconnects from Wi-Fi
        
    - Tor stops working
        
    - Network activity ends
        
    
    What to avoid:
    
    - Do not reconnect to Wi-Fi
        
    - Do not reopen the browser
        
    - Do not interrupt shutdown
        
    
    **Simple idea:**  
    Once shutdown starts, do not go back online.
    
    * * *
    
    ## Step 4: Power-Off Discipline
    
    When shutting down:
    
    - Use the **normal shutdown option**
        
    - Wait until the screen goes completely off
        
    - Do not force power off unless the system is stuck
        
    
    Why this matters:
    
    - Forced shutdowns can cause errors
        
    - Clean shutdowns end everything properly
        
    
    **Simple idea:**  
    Let the system shut down calmly and fully.
    
    * * *
    
    ## Step 5: Post-Session Artifact Awareness
    
    After shutdown:
    
    - Remove the Tails USB safely
        
    - Store it in a safe place
        
    - Do not leave it plugged in
        
    
    Remember:
    
    - Tails does not save session data by default
        
    - After shutdown, most things are gone
        
    
    What stays:
    
    - Only what you chose to save in persistent storage
    
    **Simple idea:**  
    After shutdown, the session is over—treat it that way.
    
    * * *
    
    ## Step 6: End-of-Session Mindset
    
    After finishing:
    
    - Do not immediately start another session
        
    - Take a break
        
    - Think about what you observed
        
    
    Good habit:
    
    - One session at a time
        
    - Clear start, clear end
        
    
    **Simple idea:**  
    A clean ending protects everything you did.
    

* * *
