---
title: "13. Persistent Storage Creation"
---

- ## Step 1: Persistent Volume Initialization
    
    - Persistent Storage is created **inside the Tails USB**
        
    - You start this process from a tool provided by Tails
        
    - This is a **one-time setup**
        
    
    What happens here:
    
    - Tails prepares a secure space
        
    - This space is separate from normal files
        
    - Nothing is saved automatically yet
        
    
    **Simple idea:**  
    You are creating a safe box inside the USB.
    
    * * *
    
    ## Step 2: Encryption Passphrase Context
    
    To protect Persistent Storage:
    
    - You must create a **passphrase**
        
    - This passphrase:
        
        - Locks the storage
            
        - Protects data if USB is lost
            
    
    Important rules:
    
    - Use something you can remember
        
    - Do not share it
        
    - If you forget it, data is lost forever
        
    
    **Simple idea:**  
    The passphrase is the key to your safe box.
    
    * * *
    
    ## Step 3: Feature Selection for Persistence
    
    Tails lets you choose **what to save**.
    
    Examples of things you can choose to keep:
    
    - Browser settings
        
    - Cryptographic keys
        
    - Wallet data
        
    - Documents (if needed)
        
    
    Important:
    
    - You do **not** have to enable everything
        
    - Enable only what you really need
        
    
    **Simple idea:**  
    Only save what is necessary, nothing extra.
    
    * * *
    
    ## Step 4: Mount and Unlock Process
    
    Each time Tails starts:
    
    - Persistent Storage is **locked**
        
    - You must enter the passphrase to unlock it
        
    
    What happens when unlocked:
    
    - Selected data becomes available
        
    - Saved settings load into the session
        
    
    If you do not unlock it:
    
    - Tails runs like a fresh system
        
    - Nothing from last time is used
        
    
    **Simple idea:**  
    No passphrase = no saved data.
    
    * * *
    
    ## Step 5: Persistence Failure Recognition
    
    Sometimes Persistent Storage does not work.
    
    Common signs:
    
    - Passphrase not accepted
        
    - Storage does not unlock
        
    - Saved files are missing
        
    
    Possible reasons:
    
    - Wrong passphrase
        
    - USB problem
        
    - Storage corruption
        
    
    What to do:
    
    - Do not panic
        
    - Do not keep retrying randomly
        
    - Accept that data may be unrecoverable
        
    
    **Simple idea:**  
    If persistence fails, stop and reassess.
    
    * * *
    
    ## Step 6: Decide When to Use Persistence
    
    Important mindset:
    
    - Persistence increases convenience
        
    - But it also increases risk
        
    
    Best practice:
    
    - Use persistence only when needed
        
    - Avoid saving unnecessary data
        
    - Think before enabling new features
        
    
    **Simple idea:**  
    Persistence is useful, but not always required.
    

* * *
