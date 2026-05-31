#!bin/bash
# my site rrzpw6tv5jtukyahaujddv5ibovzuxhkwx3ctgun2qkuwo6gxwbiqhqd.onion

#Installing Dependencies
echo -e $'\e[1;33m[\e[0m\e[1;77m Hoster \e[0m\e[1;33m]\e[0m\e[1;32m # Installing Dependencies ! \e[0m'
sudo apt-get update -y
sudo apt install curl -y
sudo apt install wget -y
sudo apt install php -y
sudo apt install nano -y
sleep 2

echo -e $'\e[1;33m[\e[0m\e[1;77m Hoster \e[0m\e[1;33m]\e[0m\e[1;32m # Installing nginx with TOR ! \e[0m'

#Installing Nginx and Tor
sudo apt install nginx tor -y
sleep 5

echo -e $'\e[1;33m[\e[0m\e[1;77m Hoster \e[0m\e[1;33m]\e[0m\e[1;32m # Configuring Firewall ! \e[0m'

# Configure Firewall, check if rules already exist before adding
sudo iptables -C INPUT -m state --state NEW -p tcp --dport 80 -j ACCEPT || sudo iptables -I INPUT -m state --state NEW -p tcp --dport 80 -j ACCEPT
sleep 1
sudo iptables -C INPUT -m state --state NEW -p tcp --dport 443 -j ACCEPT || sudo iptables -I INPUT -m state --state NEW -p tcp --dport 443 -j ACCEPT
sleep 1
sudo iptables -C INPUT -m state --state NEW -p tcp --dport 9050 -j ACCEPT || sudo iptables -I INPUT -m state --state NEW -p tcp --dport 9050 -j ACCEPT
sleep 2

echo -e $'\e[1;33m[\e[0m\e[1;77m Hoster \e[0m\e[1;33m]\e[0m\e[1;32m # Creating a Tor Service for Your Website ! \e[0m'

#Creating a Tor Service for Your Website
#sudo -i

#change directory to tor
#cd /etc/tor/

#Configuring Tor hidden service
sudo sed -i '70 i HiddenServiceDir /var/lib/tor/nginx-tor-service/' /etc/tor/torrc
sudo sed -i '71 i HiddenServicePort 80 127.0.0.1:80' /etc/tor/torrc
sudo sed -i '72 i HiddenServicePort 443 127.0.0.1:443' /etc/tor/torrc
sleep 4

echo -e $'\e[1;33m[\e[0m\e[1;77m Hoster \e[0m\e[1;33m]\e[0m\e[1;32m # Reloading the Tor daemon to apply your new settings ! \e[0m'

#Reload the Tor daemon to apply new settings
sudo systemctl enable tor
sleep 6
sudo systemctl restart tor
sleep 3

echo -e $'\e[1;33m[\e[0m\e[1;77m Hoster \e[0m\e[1;33m]\e[0m\e[1;32m # Creating website using Nginx ! \e[0m'

#make a sites-disabled folder
sudo mkdir /etc/nginx/sites-disabled/

#move the default config file to disabled folder
sudo mv /etc/nginx/sites-enabled/default /etc/nginx/sites-disabled/
sleep 2

#Creating a Nginx config file
sudo touch /etc/nginx/sites-available/nginx-tor-service
sleep 1

#Copy hostname to nginx-tor-service
echo "server {
        listen 80 default_server;
        listen [::]:80 default_server;
 
        root /var/www/html;
 
        server_name $(cat /var/lib/tor/nginx-tor-service/hostname);
 
        location / {
                    try_files \$uri \$uri/ =404;
        }
}" | sudo tee /etc/nginx/sites-available/nginx-tor-service
sleep 3
# Path for the website:    /var/lib/tor/nginx-tor-service/hostname

#Create a symbolic link for new configuration file to “/etc/nginx/sites-enabled.”
sudo ln -s /etc/nginx/sites-available/nginx-tor-service /etc/nginx/sites-enabled/
sleep 2

#Enable and restart Nginx
sudo systemctl enable nginx
sleep 5
sudo systemctl restart nginx
sleep 3

echo -e $'\e[1;33m[\e[0m\e[1;77m Hoster \e[0m\e[1;33m]\e[0m\e[1;32m # Setup Complete! \e[0m'


#Downloading TOR
DOWNLOAD_URL=$(curl -s https://www.torproject.org/download/ | \
grep -oP 'href="\K[^"]*tor-browser-linux-x86_64[^"]*\.tar\.xz' | \
head -1)

# Check if the download URL was found
if [ -z "$DOWNLOAD_URL" ]; then
    echo "Failed to find the download URL."
    exit 1
fi

# Prepend the base URL to the relative URL
DOWNLOAD_URL="https://www.torproject.org$DOWNLOAD_URL"

# Define the file name based on the URL
FILE_NAME=$(basename "$DOWNLOAD_URL")

# Download the latest version
echo "Downloading $FILE_NAME..."
wget "$DOWNLOAD_URL"
sleep 5
tar xvf ./"$FILE_NAME"


######
#wget https://www.torproject.org/dist/torbrowser/14.0.1/tor-browser-linux-x86_64-14.0.1.tar.xz
#tar xvf ./tor-browser-linux-x86_64-14.0.1.tar.xz
######


#changing ownership
current_user=$(logname)
sudo chown -R "$current_user:$current_user" tor-browser
sleep 5
cd ./tor-browser
sleep 2
chmod +x ./start-tor-browser.desktop
sleep 5
#./start-tor-browser.desktop --register-app

#view hostname
echo -e $'\e[1;33m[\e[0m\e[1;77m Hoster \e[0m\e[1;33m]\e[0m\e[1;32m # Generated hostname! \e[0m'
cat  /var/lib/tor/nginx-tor-service/hostname
#./start-tor-browser.desktop