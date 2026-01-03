---
title: "4. System Boot and Firmware Interaction"
weight: 4
---

- ## Step 1: Boot Menu Access and Selection
    
    - Turn the computer **off completely**
        
    - Insert the **Tails USB**
        
    - Turn the computer **on**
        
    - Immediately press the **boot menu key**
        
    
    Common keys are:
    
    - F12
        
    - F10
        
    - F9
        
    - ESC
        
    - DEL  
        (depends on the computer)
        
    
    When the boot menu appears:
    
    - Select the USB device
        
    - Press Enter
        
    
    **Simple idea:**  
    You are telling the computer: “Start from the USB, not from Windows.”
    
    * * *
    
    ## Step 2: UEFI vs Legacy Boot (Basic Understanding)
    
    You may see terms like:
    
    - UEFI
        
    - Legacy
        
    - BIOS
        
    
    Do not panic.
    
    - These are **different ways computers know how to start**
        
    - Modern computers usually use **UEFI**
        
    - Older computers may use **Legacy**
        
    
    What to remember:
    
    - If USB does not boot in one mode, it may work in the other
        
    - You do not need deep knowledge—just awareness
        
    
    **Simple idea:**  
    Different computers start in different ways.
    
    * * *
    
    ## Step 3: Secure Boot Interaction Scenarios
    
    Some computers have **Secure Boot** enabled.
    
    What this means:
    
    - The computer blocks operating systems it does not recognize
    
    If Tails does not start:
    
    - Secure Boot may be the reason
        
    - You may need to:
        
        - Enter firmware settings
            
        - Temporarily disable Secure Boot
            
    
    Important:
    
    - This is common
        
    - This does not mean something is broken
        
    
    **Simple idea:**  
    Secure Boot can stop Tails from starting.
    
    * * *
    
    ## Step 4: Boot Failure Diagnostics (When Things Don’t Work)
    
    If the computer does not boot from USB, check:
    
    - Did you select the correct USB?
        
    - Was the USB fully written?
        
    - Did the boot menu open correctly?
        
    - Does the screen show errors or just skip the USB?
        
    
    What to do:
    
    - Power off
        
    - Try again calmly
        
    - Do not randomly change settings
        
    
    **Simple idea:**  
    When boot fails, stop and check one thing at a time.
    
    * * *
    
    ## Step 5: Hardware Compatibility Observations
    
    Some hardware may behave differently:
    
    - USB ports may not detect the drive
        
    - Some keyboards may not work early
        
    - Some laptops may ignore USB booting
        
    
    Things to note:
    
    - Try a different USB port
        
    - Try another computer if possible
        
    - Hardware issues are normal, not mistakes
        
    
    **Simple idea:**  
    Not all computers behave the same with Tails.
    
    * * *
    
    ## Step 6: Successful Boot Confirmation
    
    You know it worked when:
    
    - The Tails logo appears
        
    - You see a welcome or loading screen
        
    - The normal operating system does not load
        
    
    Once this happens:
    
    - You have successfully booted from USB
        
    - You can continue to the next step
        
    
    **Simple idea:**  
    If you see Tails, you are on the right path.
    

* * *

## Next


{{< cards >}}
  {{< card url="/Master-Darknet/docs/first-hands-on-activation/5-initial-tails-startup-and-welcome-screen" title="5-initial-tails-startup-and-welcome-screen" icon="document-text">}}
{{< /cards >}}