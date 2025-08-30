# Installation Guide

This comprehensive guide covers the installation process for all AEROS products across different operating systems.

## Pre-Installation Checklist

Before beginning the installation process, please ensure:

- [ ] Your system meets the minimum requirements
- [ ] You have administrator privileges
- [ ] All previous versions of AEROS are uninstalled
- [ ] Your antivirus software allows the installation
- [ ] You have a stable internet connection

## Download Options

### AEROS Desktop

The full-featured desktop application available for Windows, macOS, and Linux.

**File Sizes:**
- Windows: ~2.1 GB
- macOS: ~1.8 GB  
- Linux: ~1.9 GB

### AEROS Web

Browser-based application requiring no installation. Simply visit our web portal and sign in.

### AEROS Mobile

Companion mobile apps for iOS and Android to monitor simulations on the go.

## Windows Installation

### System Requirements

- Windows 10 (64-bit) or Windows 11
- 8 GB RAM minimum (16 GB recommended)
- 4 GB available disk space
- DirectX 11 compatible graphics card
- .NET Framework 4.8 or later

### Installation Steps

1. **Download the Installer**
   - Download `AEROS-Setup-Windows-x64.exe`
   - Verify the file integrity using the provided checksum

2. **Run the Installer**
   - Right-click the installer and select "Run as administrator"
   - If Windows Defender SmartScreen appears, click "More info" then "Run anyway"

3. **Installation Wizard**
   - Accept the End User License Agreement
   - Choose installation directory (default: `C:\Program Files\AEROS`)
   - Select components to install:
     - AEROS Core (required)
     - AEROS Simulation Engine
     - AEROS Design Tools
     - Sample Projects
     - Documentation

4. **Complete Installation**
   - Click "Install" to begin the process
   - Wait for installation to complete (typically 5-10 minutes)
   - Click "Finish" to complete the installation

### Post-Installation Setup

1. **Launch AEROS**
   - Find AEROS in your Start menu or desktop shortcut
   - The application will perform initial setup on first launch

2. **License Activation**
   - Enter your license key when prompted
   - For trial users, select "Start Trial"

3. **User Account Setup**
   - Create a new account or sign in with existing credentials
   - Verify your email address if creating a new account

## macOS Installation

### System Requirements

- macOS 10.15 (Catalina) or later
- 8 GB RAM minimum (16 GB recommended)
- 4 GB available disk space
- Metal-compatible graphics card

### Installation Steps

1. **Download the Installer**
   - Download `AEROS-macOS.dmg`
   - Verify the file integrity

2. **Mount the Disk Image**
   - Double-click the `.dmg` file to mount it
   - A new window will open showing the AEROS application

3. **Install the Application**
   - Drag the AEROS icon to the Applications folder
   - Wait for the copy process to complete

4. **Security Settings**
   - Open System Preferences > Security & Privacy
   - If prompted, click "Open Anyway" to allow AEROS to run

### First Launch

1. **Launch AEROS**
   - Open Applications folder and double-click AEROS
   - macOS may ask for permission to access certain folders

2. **Gatekeeper Approval**
   - If Gatekeeper blocks the app, go to System Preferences > Security & Privacy
   - Click "Open Anyway" next to the AEROS entry

## Linux Installation

### Supported Distributions

- Ubuntu 18.04 LTS or later
- CentOS 7 or later
- Fedora 30 or later
- openSUSE Leap 15.0 or later

### System Requirements

- 8 GB RAM minimum (16 GB recommended)
- 4 GB available disk space
- OpenGL 3.3 compatible graphics card
- X11 or Wayland display server

### Installation Methods

#### Method 1: AppImage (Recommended)

```bash
# Download the AppImage
wget https://releases.aeros.com/linux/AEROS-x86_64.AppImage

# Make it executable
chmod +x AEROS-x86_64.AppImage

# Run AEROS
./AEROS-x86_64.AppImage
```

#### Method 2: Package Manager

**Ubuntu/Debian:**
```bash
# Add AEROS repository
curl -fsSL https://packages.aeros.com/gpg | sudo apt-key add -
echo "deb https://packages.aeros.com/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/aeros.list

# Update package list and install
sudo apt update
sudo apt install aeros
```

**CentOS/RHEL:**
```bash
# Add AEROS repository
sudo yum-config-manager --add-repo https://packages.aeros.com/centos/aeros.repo

# Install AEROS
sudo yum install aeros
```

## License Management

### License Types

- **Trial License**: 30-day full-featured trial
- **Academic License**: Discounted licensing for educational institutions
- **Commercial License**: Full commercial use
- **Enterprise License**: Volume licensing with additional features

### Activating Your License

1. **Online Activation** (Recommended)
   - Enter your license key in the activation dialog
   - AEROS will automatically validate with our servers

2. **Offline Activation**
   - Generate a machine fingerprint
   - Submit to our licensing team
   - Import the returned license file

### Managing Multiple Licenses

For organizations with multiple licenses:

1. **License Server Setup**
   - Install AEROS License Server on a network machine
   - Configure client machines to connect to the license server

2. **Floating Licenses**
   - Allow licenses to be shared across multiple users
   - Automatic check-in/check-out system

## Verification and Testing

### Installation Verification

1. **Launch AEROS**
   - Verify the application starts without errors
   - Check the About dialog for version information

2. **Run Sample Project**
   - Open a sample project from the gallery
   - Run a simple simulation to test functionality

3. **Check System Integration**
   - Verify file associations are correct
   - Test import/export functionality

### Performance Testing

Run the built-in benchmark to verify optimal performance:

1. Go to **Help > System Benchmark**
2. Run the performance test
3. Compare results with recommended specifications

## Troubleshooting

### Common Issues

**Installation fails with "Insufficient privileges"**
- Ensure you're running the installer as administrator (Windows) or with sudo (Linux)

**Application won't start after installation**
- Check system requirements
- Update graphics drivers
- Verify antivirus isn't blocking the application

**License activation fails**
- Check internet connection
- Verify license key format
- Contact support if issues persist

**Poor performance during simulations**
- Close unnecessary applications
- Check available RAM and disk space
- Consider upgrading hardware or using cloud computing

### Getting Support

If you encounter issues not covered in this guide:

1. **Check Documentation**: Search our knowledge base
2. **Community Forum**: Ask questions in our user community
3. **Support Ticket**: Submit a support request with system details
4. **Phone Support**: Call our technical support team (Professional/Enterprise customers)

## Next Steps

After successful installation:

1. **Complete the Quick Start Tutorial**: [Quick Start Guide](/learn/quick-start)
2. **Explore Sample Projects**: Learn from pre-built examples
3. **Join the Community**: Connect with other AEROS users
4. **Schedule Training**: Consider professional training for your team

---

Installation complete? Continue with our [Quick Start Guide](/learn/quick-start) to create your first simulation.