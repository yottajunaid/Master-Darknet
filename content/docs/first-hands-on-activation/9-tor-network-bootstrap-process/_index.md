---
title: "9. Tor Network Bootstrap Process"
weight: 9
---

- ## Step 1: Tor Daemon Initialization Observation
    
    After internet is connected:
    
    - **Tor** starts quietly in the background
        
    - You may see:
        
        - A message saying Tor is starting
            
        - A progress bar or status text
            
    
    What this means:
    
    - Tor software is waking up
        
    - It is preparing to connect to the Tor network
        
    
    **Simple idea:**  
    Tor is starting its engine.
    
    * * *
    
    ## Step 2: Network Clock Synchronization
    
    Before Tor can connect properly:
    
    - The system checks the **current time**
        
    - Time must be correct for secure connections
        
    
    Why this matters:
    
    - Wrong time can break secure communication
        
    - This step usually happens automatically
        
    
    If time is wrong:
    
    - Tor may fail to connect
        
    - Errors may appear
        
    
    **Simple idea:**  
    Tor checks the time before moving forward.
    
    * * *
    
    ## Step 3: Directory Authority Contact Phase
    
    Tor now tries to:
    
    - Contact special Tor servers
        
    - Ask them for a list of available Tor relays
        
    
    These servers:
    
    - Help Tor know where to connect
        
    - Do not know who you are
        
    
    This step may take:
    
    - A few seconds
        
    - Longer on slow networks
        
    
    **Simple idea:**  
    Tor is asking: “Who is online so I can connect safely?”
    
    * * *
    
    ## Step 4: Bootstrap Percentage States
    
    You may see messages like:
    
    - “Connecting to the Tor network”
        
    - “Bootstrapped 10%”
        
    - “Bootstrapped 45%”
        
    - “Bootstrapped 100%”
        
    
    What this means:
    
    - Tor shows progress as it connects step by step
        
    - 100% means Tor is ready
        
    
    Important:
    
    - Progress may pause for a while
        
    - This is normal
        
    
    **Simple idea:**  
    The percentage shows how close Tor is to being ready.
    
    * * *
    
    ## Step 5: Common Bootstrap Failures
    
    Sometimes Tor does not reach 100%.
    
    Common reasons:
    
    - Internet is unstable
        
    - Wi-Fi disconnects
        
    - Network blocks Tor
        
    - Time is incorrect
        
    
    What you may see:
    
    - Stuck at a certain percentage
        
    - Error messages
        
    - Tor keeps retrying
        
    
    What to do:
    
    - Wait calmly
        
    - Do not keep clicking
        
    - Check Wi-Fi connection
        
    
    **Simple idea:**  
    If Tor fails, stay calm and check the basics.
    
    * * *
    
    ## Step 6: Successful Bootstrap Confirmation
    
    Tor is ready when:
    
    - Bootstrap reaches 100%
        
    - Status shows “Connected to Tor”
        
    - Tor Browser can open normally
        
    
    Only after this:
    
    - Open Tor Browser
        
    - Start browsing or searching
        
    
    **Simple idea:**  
    No 100% = Tor is not ready yet.
    

* * *
## Next


{{< cards >}}
  {{< card url="/Master-Darknet/docs/first-hands-on-activation/10-tor-circuit-establishment-practical-view" title="10-tor-circuit-establishment-practical-view" icon="document-text">}}
{{< /cards >}}