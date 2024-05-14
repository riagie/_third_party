## Cloud Data Center

RESTful application programming interfaces (API's) that enables you to access data globally service.
After you register your app and get authentication tokens for a user or service, you can make requests to the Cloud Data Center API's.

#### Information of systems components

```md {"id":"01HXTVKHGDRCQHMD4AJSTD8QQ0"}
Hardware Report:

Host Name:                 9F079636H
OS Name:                   Microsoft Windows 10 Pro
OS Version:                10.0.19045 N/A Build 19045
OS Manufacturer:           Microsoft Corporation
OS Configuration:          Standalone Workstation
OS Build Type:             Multiprocessor Free
Registered Owner:          {{users}}
Registered Organization:
Product ID:                00330-50000-00000-AAOEM
Original Install Date:     11/1/2022, 8:20:54 PM
System Boot Time:          3/4/2024, 8:23:55 PM
System Manufacturer:       TOSHIBA
System Model:              PORTEGE Z30-B
System Type:               x64-based PC
Model name:                Intel(R) Core(TM) i5-5300U CPU @ 2.30GHz
Processor(s):              1 Processor(s) Installed.
                           [01]: Intel64 Family 6 Model 61 Stepping 4 GenuineIntel ~2300 Mhz
BIOS Version:              TOSHIBA Version 6.50  , 3/6/2018
Windows Directory:         C:\Windows
System Directory:          C:\Windows\system32
Boot Device:               \Device\HarddiskVolume1
System Locale:             en-us;English (United States)
Input Locale:              en-us;English (United States)
Time Zone:                 (UTC+07:00) Bangkok, Hanoi, Jakarta
Total Physical Memory:     16,279 MB
Available Physical Memory: 5,638 MB
Virtual Memory: Max Size:  20,631 MB
Virtual Memory: Available: 5,162 MB
Virtual Memory: In Use:    15,469 MB
Page File Location(s):     C:\pagefile.sys
Domain:                    WORKGROUP
Logon Server:              \\9F079636H
Hotfix(s):                 23 Hotfix(s) Installed.
                           [01]: KB5034466
                           [02]: KB5027122
                           [03]: KB5000736
                           [04]: KB5011048
                           [05]: KB5012170
                           [06]: KB5015684
                           [07]: KB5034843
                           [08]: KB5018506
                           [09]: KB5020372
                           [10]: KB5022924
                           [11]: KB5023794
                           [12]: KB5025315
                           [13]: KB5026879
                           [14]: KB5028318
                           [15]: KB5028380
                           [16]: KB5029709
                           [17]: KB5031539
                           [18]: KB5031540
                           [19]: KB5032392
                           [20]: KB5032907
                           [21]: KB5034224
                           [22]: KB5035225
                           [23]: KB5001405
Network Card(s):           3 NIC(s) Installed.
                           [01]: Intel(R) Dual Band Wireless-AC 7265
                                 Connection Name: Wi-Fi
                                 DHCP Enabled:    Yes
                                 DHCP Server:     192.168.109.248
                                 IP address(es)
                                 [01]: 192.168.109.167
                                 [02]: fe80::7fa:571e:63e0:d146
                           [02]: Intel(R) Ethernet Connection (3) I218-LM
                                 Connection Name: Ethernet
                                 Status:          Media disconnected
                           [03]: Hyper-V Virtual Ethernet Adapter
                                 Connection Name: vEthernet (WSL)
                                 DHCP Enabled:    No
                                 IP address(es)
                                 [01]: 172.28.80.1
                                 [02]: fe80::ca69:8753:f1a:aab3
Hyper-V Requirements:      A hypervisor has been detected. Features required for Hyper-V will not be displayed.

```

```ini {"id":"01HXTVKHGDRCQHMD4AJT8WVN1J"}
Software Report:

Server version: Node/9.5.1 (Ubuntu)
Server built:   2024-01-17T03:00:18
NPM Version:	v18.16.1
Mysql Version:	Ver 8.0.36-0ubuntu0.22.04.1 for Linux on x86_64 ((Ubuntu))
Framework:	NestJS
Version:	10.3.2
Application:	Fastify

```

```sh {"id":"01HXTVKHGDRCQHMD4AJTSBZX10"}
Server Report

No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 22.04.4 LTS
Release:        22.04
Codename:       jammy

```

#### Getting started for Windows 10

- Settings

```yaml {"id":"01HXTX2T5FQ4M8ESJK2KQ0Q0KJ"}
npm run migration:create
npm run migration:generate
npm run migration:run
npm run migration:revert
npm run schema:drop

npm run seeder:run
run npm schematic:run
```
