---
title: "6. Network Hardware Preparation"
weight: 6
---

- ## Step 1: Internal Wi-Fi vs External Adapter Decision
    
    Most laptops have **built-in (internal) Wi-Fi**.
    
    Sometimes:
    
    - Internal Wi-Fi works fine
        
    - Sometimes it does **not work well** with Tails
        
    - Sometimes an **external USB Wi-Fi adapter** works better, also avoiding internal logs for better security
        
    
    So you decide:
    
    - Use **internal Wi-Fi** if it is detected and stable
        
    - Use **external USB Wi-Fi adapter** if internal Wi-Fi is missing or unreliable
        
    
    **Simple idea:**  
    If built-in Wi-Fi works, use it. If not, use a USB Wi-Fi adapter because it's highly secure.
    
    * * *
    
    ## Step 2: USB Wi-Fi Adapter Recognition
    
    If you plug in a **USB Wi-Fi adapter**:
    
    - Wait a few seconds
        
    - Watch if the system notices it
        
    - A new Wi-Fi option may appear
        
    
    Good signs:
    
    - Wi-Fi networks start showing
        
    - No error messages
        
    
    Bad signs:
    
    - Nothing changes
        
    - Adapter light stays off
        
    - Wi-Fi still missing
        
    
    **Simple idea:**  
    The system must “see” the adapter to use it.
    
    * * *
    
    ## Step 3: Driver Loading Observations
    
    A **driver** is what allows the system to talk to the Wi-Fi hardware.
    
    What you may notice:
    
    - Wi-Fi appears after a short delay
        
    - Network list suddenly shows up
        
    
    What this means:
    
    - The driver loaded correctly
        
    - Hardware is usable
        
    
    If Wi-Fi never appears:
    
    - Driver may be missing
        
    - Adapter may not be supported
        
    
    **Simple idea:**  
    If Wi-Fi shows up, the driver is working.
    
    * * *
    
    ## Step 4: Radio State Awareness
    
    Wi-Fi works using **radio signals**.
    
    Things to check:
    
    - Wi-Fi is turned **ON**
        
    - Airplane mode is **OFF**
        
    - No hardware Wi-Fi switch is disabled
        
    
    Sometimes laptops have:
    
    - A physical Wi-Fi key
        
    - A function key that turns Wi-Fi off
        
    
    **Simple idea:**  
    Wi-Fi must be turned on to connect.
    
    * * *
    
    ## Step 5: MAC Address Exposure Concepts (Basic Understanding)
    
    Every network device has a **MAC address**.
    
    - It is like a hardware ID
        
    - Networks can see it
        
    
    Important to know:
    
    - Exposing the real MAC address can identify a device
        
    - Tails helps manage this automatically
        
    - Users should just be **aware**, not worried
        
    
    Do not:
    
    - Change advanced settings unless you understand them
    
    **Simple idea:**  
    Your Wi-Fi device has an ID—Tails helps protect it.
    
    * * *
    
    ## Step 6: Final Network Readiness Check
    
    Before connecting to Wi-Fi:
    
    - Confirm Wi-Fi hardware is detected
        
    - Confirm Wi-Fi is turned on
        
    - Confirm you see available networks
        
    
    Only after this:
    
    - Move to connecting to a network
        
    - Start the internet connection process
        
    
    **Simple idea:**  
    Make sure Wi-Fi is ready before trying to connect.
    

* * *
## Next


{{< cards >}}
  {{< card url="/Master-Darknet/docs/first-hands-on-activation/7-wireless-router-and-network-context-assessment" title="7-wireless-router-and-network-context-assessment" icon="document-text">}}
{{< /cards >}}