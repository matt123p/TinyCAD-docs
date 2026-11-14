---
layout: default
---

# Bundled libraries

Bundled libraries are collections of ready-to-place symbols supplied with TinyCAD in both the browser and Desktop App. They cover equipment layouts as well as electronic circuits. You can use them without signing in, downloading a library file or setting up a library folder.

## Find and place a component

1. Open the library panel on the left. If it is collapsed, use its expand button.
2. Select **Standard**. **Online** searches the online collection; **My Libraries** contains your own library files.
3. Use **Choose a standard library** to select a collection. TinyCAD loads one standard library at a time and remembers your choice on this device.
4. Browse the list, or type a name or description into **Search libraries...**. Each result has an artwork preview. Select a result to inspect its larger preview and description.
5. Drag the component's preview onto the drawing. Position it on the grid; press **Escape** or right-click when you have finished placing copies.

Changing the selected library does not remove components already placed. Their definitions are embedded in the drawing, so someone opening it does not need to load the same libraries. Standard libraries are read-only; use [custom libraries](../Custom-symbol-libraries/) when you want to maintain your own symbol definitions.

{% include video-player.html src="/v4/videos/simulation/libraries.mp4" poster="/v4/videos/simulation/libraries.jpg" caption="Choose a bundled library, search for an eight-port switch and drag it onto a drawing." %}

## Equipment and layout libraries

These libraries show the physical arrangement of equipment, boards, terminals and sockets. They help you explain **what connects to what**. They do not include executable firmware, mechanical simulation or SPICE models.

| Library | Contents | Typical use |
| --- | --- | --- |
| **Network layout** — 47 symbols | Consumer routers, switches and access points; matching 19-inch rack switches, routers, firewalls, patch panels and blank panels | Office cabling, home networks and rack plans |
| **Embedded processors and smart home** — 44 symbols | Ten controller boards, 26 sensor/actuator modules and eight displays | Prototyping a sensor station, home automation or an embedded project |
| **Audio & Music** — 99 symbols | Microphones, mixers, interfaces, instruments, MIDI, computers, connectors, headphones, speakers, amplifiers and stage equipment | Gigs, studios, podcasts, home recording, churches and schools |
| **Test & Measurement** — 78 symbols | Supplies, loads, oscilloscopes, meters, RF instruments, probes, data acquisition, heaters, relays, controls, pumps and bench apparatus | Laboratory connections and experimental setups |
| **Motors & Motion** — 66 symbols | DC and brushless motors, steppers, servos, driver boards, encoders, limit switches, solenoids, electric/pneumatic actuators and mechanical parts | Robotics, automation and motion-control wiring |
| **Solar power and batteries** — 52 symbols | Panels, arrays, inverters, batteries, EV chargers, backup equipment, protection, monitoring and home loads | A conceptual home-energy system and its power/control links |

### Network layout

Ethernet connection points are centred in the sockets. One point represents a **whole cable**, rather than eight individual Ethernet conductors. Desktop switches cover 4, 5, 8, 16 and 24 copper ports, including PoE and mixed copper/fibre options. Rack layouts include 8/16/24/48-port arrangements with two- or four-cage SFP+ uplinks, plus additional generic 10- and 32-copper-port planning layouts. Read these as available symbol choices rather than a claim that every layout is equally common. Read the symbol name and front-panel labels to choose the port count and uplink arrangement you need.

The 19-inch 1U panels share a common size. Keep their default scale and stack them at **120 drawing units** vertically to form a rack. The [Small office network example](../Bundled-Examples/#equipment-and-layout-examples) demonstrates four matching panels and longer runs to an access point and desk switch. Draw each patch lead to its socket connection point; the panel artwork does not automatically connect different sockets internally.

### Embedded processors and smart home

Controller boards include ESP32 DevKitC V4, ESP32-S3 DevKitC-1, NodeMCU ESP8266, LOLIN D1 mini, Raspberry Pi 3/4/5 and Arduino Uno/Nano/Mega variants. Sensor modules include temperature, humidity, light, pressure, touch and passive infrared sensing, alongside outputs such as buzzers. The PCB, header pads and pin labels remain visible; a small function icon identifies the sensor instead of an anonymous chip rectangle.

Display options include an I2C LCD1602 and 128×64 OLED, Waveshare 1.8-inch SPI LCD and 2.8-inch capacitive touch LCD, Nextion 2.8-inch UART touch display, and Waveshare 2.13/2.9/4.2-inch e-paper assemblies. Each symbol pairs two views of **one device**: the screen face on the left and rear/header contacts on the right. Only the rear contacts are electrical connection points. Repeated headers can expose the same hardware signals; they are not extra independent channels. Follow the labels and named revision.

Check the named board revision before wiring. On Raspberry Pi headers, **physical pin numbers and BCM GPIO names are different numbering systems**. Board pin positions help with a wiring diagram, but the artwork is not a PCB footprint or a manufacturing drawing. Power rails, logic levels, current limits and pull-ups still need checking against the actual module's documentation.

### Audio, laboratory and motion connections

For audio diagrams, most sockets represent whole cables. Label microphone, line, speaker, headphone and MIDI routes so their purpose is clear. A drawn connector does not establish that two devices have compatible levels, balanced wiring or phantom-power requirements.

Laboratory and motion symbols distinguish individual electrical conductors, complete cables and fluid hoses. For example, BNC/USB connections represent cables, while a motor driver's power, logic and motor terminals are separate conductors. Mechanical-only parts can have no electrical terminals. Use the pin labels and symbol description rather than assuming every visible feature is a connection.

**Test & Measurement equipment symbols are pictures for a setup diagram.** For instruments that acquire simulated signals, use **Simulation → Lab Equipment**; see [sources and virtual instruments](../Simulation-Sources-and-Instruments/).

Solar symbols represent whole cables or logical links. They describe system architecture; they do not specify individual installation terminals, cable ratings or a complete protection scheme.

## Libraries with simulation models

Use these collections when you want to [run a circuit simulation](../Simulation/).

| Library | Contents | Modelling purpose |
| --- | --- | --- |
| **SPICE essentials** — 27 symbols | Passive parts, sources, diodes, LEDs, transistors, transformer and a 741-style amplifier | A starting set of modelled analogue components |
| **Digital logic** — 28 symbols | Gates, counters and storage | Configurable logic behaviour implemented using portable analogue SPICE models |
| **Functional blocks** — 17 symbols | ADC/DAC, communication interfaces, state machines and programmable I/O blocks | Explore system-level behaviour without implementing a complete chip |
| **Sensors and interfaces** — 10 symbols | Modelled sensors, a test point, analogue switch and AM modulator | Relate a configured stimulus to electrical output |

These models are approximations for exploring behaviour. They are not guarantees of a named manufacturer's device performance. The functional microcontroller, PLC or FPGA blocks do not execute firmware or HDL. The **Digital logic** library uses analogue behavioural models and can run in the browser; the separate [XSPICE course](../XSPICE-Tutorial/) uses Desktop's event-driven engine.

Read each model's properties, units and pin mapping. Logic models may have hidden power pins named **VCC** and **VSS**. Provide the corresponding supply nets and connect **VSS** to SPICE ground **0**. A label containing the word GND does not by itself create node 0.

## Make wiring unambiguous

Keep the grid on and terminate wires at the actual connection points. A wire touching an unrelated socket or another wire's endpoint can create an electrical connection. Route around those points; an apparently tidy line is not enough to establish the intended netlist.

Unused equipment sockets can be left open. Some circuit-checker notices about wires entering physical panel outlines are expected for these drawings, but unintended shorts and junctions must be corrected. See [Wires](../Wires/) for electrical connectivity and [Bundled examples](../Bundled-Examples/) for worked layouts using these collections.
