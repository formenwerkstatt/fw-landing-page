export default {
  slogan: "We bring your ideas to life",
  cta: "To the Demo",
  help: "Use gestures or mouse to look around, scroll and zoom",
  cookie:
    "This website uses cookies to provide you with a better service. By continuing to use the site, you consent to its use.",
  accept: "OK",
  reject: "Reject",

  menu: {
    home: "Home",
    about: "About Us",
    blog: "Blog",
    contact: "Contact",
    services: "Services",
  },

  ourServices: {
    title: "Our Core Areas",
    paragraph:
      "Whether an established injection molding company or a young startup, your mold-making needs are handled from a single source. It doesn't have to be an injection mold - we turn, mill, erode, grind, and weld individual parts to small series according to your requirements.",
  },

  services: {
    formtechnik: {
      title: "Mold Technology",
      paragraph: "We build your molds with the right tools",
      subServices: [
        {
          title: "Consulting & Design",
          description: "Benefit from our experience",
          paragraph:
            'Every mold is different, as the geometry of the part and the material to be injected have a significant influence. Your mold is created with constantly updated CAD/CAM software in-house - well thought out, in a short time, at a good price. Especially when your product needs perfect surfaces, you benefit from our "Everything from one source" concept, including high-gloss polishing and laser markings.',
          nestedList: [
            {
              title: "We have experience with tools from the following areas:",
              list: [
                "Automotive industry",
                "Household appliances",
                "High-voltage insulators",
                "Housings for electronic devices",
                "Packaging",
                "Medical articles",
              ],
            },
            {
              title: "Material expertise:",
              list: ["PE, PP, PC, PVC, Rubber, Silicone"],
            },
            {
              title: "Modern Software & Technology:",
              list: [
                "SolidWorks, Siemens NX CAD/CAM Integration",
                "Import formats: STEP, DXF and more",
                "Individual CNC milling programs with Siemens NX CAM",
              ],
            },
          ],
          cta: "Contact us to discuss how we can implement your tool concept precisely and efficiently.",
        },
        {
          title: "Tool Manufacturing",
          description: "Your design is just the beginning",
          paragraph:
            "Once approval is received, we seamlessly transition into the manufacturing phase. With state-of-the-art equipment, we mill, turn, and grind your tool to perfection. Our machines achieve exceptional tolerances of a few micrometers, while our special polishing techniques ensure a mirror finish.",
          nestedList: [
            {
              title: "Processes include:",
              list: [
                "3D Milling",
                "High-precision Turning",
                "Ultra-fine Grinding",
                "Specialized Polishing",
              ],
            },
            {
              title: "Everything under one roof:",
              list: [
                "Tool manufacturing, finishing, and improvements are all done internally, guaranteeing synchronization and cost efficiency",
              ],
            },
          ],
          cta: "Ready to get started? Contact us today for more information.",
        },
        {
          title: "Sampling & Mass Production",
          description: "We don't stop at tool production",
          paragraph:
            "Once your tool has been manufactured, we conduct comprehensive sampling to ensure functionality, followed by small series production.",
          nestedList: [
            {
              title: "Machine Specifications:",
              list: [
                "Boy 22 M: 220 kN Closing force, precise small parts production",
              ],
            },
          ],
          cta: "Contact our team to learn how we can support your project.",
        },
      ],
    },

    fertigung: {
      title: "Manufacturing",
      paragraph: "Our in-house production",
      subServices: [
        {
          title: "Milling",
          description: "Precision meets efficiency",
          paragraph:
            "Our high-speed CNC milling machines produce even the most complex geometries with unmatched precision. Whether you're working with steel, aluminum, or other materials, our equipment ensures tight tolerances and flawless surfaces.",
          nestedList: [
            {
              title: "Machine:",
              list: [
                "Milling machine CNC DMG MORI M2: Travel paths x1100 y550 z510 mm Table 1400 x 600 mm Tool changer 24 positions",
                "Milling machining center Deckel Maho DMC63V: Travel paths x630 x500 z500 mm Siemens CNC 810",
                "Milling machining center Deckel Maho DMC835V: Travel paths x830 y500 z500 mm Siemens CNC 840",
                "HSC Milling machine Mikron HSM 500. Travel paths x500 y400 z400 mm Haidenhein 530",
                "Tool milling machine DECKEL FP5 CNC Dialog 4 Travel paths x700 y600 z450 mm",
              ],
            },
          ],
          cta: "Contact us to get more information about how our milling services can meet your requirements.",
        },
        {
          title: "Turning",
          description: "CNC, NC and conventional",
          paragraph:
            "We offer CNC, NC, and conventional turning to handle a wide range of tasks, from small precision parts to large components. With equipment like the Gildemeister NEF 400, we ensure that every turning job is completed with the utmost accuracy.",
          nestedList: [
            {
              title: "Machine:",
              list: [
                "CNC Turn-Mill Machine DMG MORI CLX450: C+Y axis, 12-position turret Turning diameter 450mm",
                "Gildemeister NEF 400: Ø350 x 650 mm machining range, 12 tool positions",
                "Colchester Triumph: Ø400 x 1000 mm machining range",
              ],
            },
            {
              title: "Capabilities:",
              list: [
                "Max. spindle speeds: 6,000 RPM",
                "Precision turning down to a few micrometers",
              ],
            },
          ],
          cta: "Need experts for turning work? Contact us today for a consultation!",
        },
        {
          title: "Sink EDM",
          description: "When traditional machining reaches its limits",
          paragraph:
            "Where machining reaches its limits, we let the sparks fly: With our CNC EDM machines and individual electrode manufacturing, we sink-erode delicate areas in molds. Our advanced CNC-controlled EDM machines ensure precision down to the smallest detail.",
          nestedList: [
            {
              title: "Machine",
              list: [
                "Sink EDM machine CNC Zimmer & Kreim ZK850, 16-position electrode changer: Travel paths x565 xy400",
                "Sink EDM machine CNC Zimmer & Kreim ZK600, 50-position electrode changer",
              ],
            },
            {
              title: "Technical Capabilities",
              list: [
                "Workpiece size up to 840 x 600 mm",
                "Individual electrode manufacturing for high detail accuracy",
                "Load capacity up to 600 kg",
              ],
            },
          ],
          cta: "Interested in more information? Contact us to learn more about how EDM can work for your project.",
        },
        {
          title: "Wire EDM",
          description: "When traditional machining reaches its limits",
          paragraph:
            "Our wire EDM machines cut even the hardest metals with extreme precision, using a thin wire to create intricate shapes and designs.",
          nestedList: [
            {
              title: "Machine:",
              list: [
                "Wire EDM machine Mitsubishi MV2400R: Travel paths 600/400/310mm",
              ],
            },
            {
              title: "Main Features:",
              list: [
                "Precise cutting for complex geometries",
                "Capabilities for handling large workpieces",
              ],
            },
          ],
          cta: "Ready to take your project to the next level? Contact our Wire EDM experts today!",
        },
        {
          title: "Laser Welding",
          description: "Welding with laser technology",
          paragraph:
            "Using the latest laser technology, we perform precise welding work to restore and repair tools. Whether it's missing material or structural damage, our laser welding ensures strong and precise repairs.",
          nestedList: [
            {
              title: "Machine:",
              list: ["Laser deposition welding TRUMPF HAAS LASER"],
            },
            {
              title: "Laser Precision:",
              list: [
                "Weld seams down to 0.1 mm",
                "Welding of aluminum, steel, stainless steel, and titanium",
              ],
            },
          ],
          cta: "Contact us to discuss how laser welding can extend the life of your tools.",
        },
        {
          title: "Laser Engraving",
          description: "Precise etching for lasting impressions",
          paragraph:
            "Logos, serial numbers, and custom text are precisely engraved into your tools or products with our Trumpf engraving laser. With the ability to handle parts up to 800 kg, our flexible laser arm enables deep engraving even in the most difficult areas.",
          nestedList: [
            {
              title: "Applications:",
              list: [
                "Serial numbers, barcodes, and QR codes",
                "Logos and trademarks",
              ],
            },
          ],
          cta: "Get in touch to explore our engraving capabilities for your project.",
        },
        {
          title: "High-gloss Polishing",
          description:
            "Flawless surfaces on the product require high-gloss polishing in the mold.",
          paragraph:
            "It is the most demanding of all surface treatments. Using current, partly self-developed processes, we polish your tools. High-gloss polishing for injection and die-casting molds, while maintaining contour geometry with sharp edges, is not only a matter of course for us but our pride.",
          nestedList: [
            {
              title: "Examples of high-gloss polishing:",
              list: [
                "Housing parts",
                "Household items",
                "Cosmetic packaging",
                "Toys and gifts",
              ],
            },
          ],
          cta: "Contact us today to discuss how our high-gloss polishing can improve your product's appearance.",
        },
        {
          title: "Surface Grinding",
          description: "With state-of-the-art precision",
          paragraph:
            "Surface grinding is crucial for achieving flat, smooth surfaces on your tools and molds. Our state-of-the-art machines can process large workpieces with micrometer precision.",
          nestedList: [
            {
              title: "Machine:",
              list: [
                "Surface grinding machine ELB OPTIMAL: Travel paths x600 y400 mm",
              ],
            },
            {
              title: "Capabilities:",
              list: [
                "Large workpieces up to 1000 mm",
                "Precise grinding to reduce surface roughness",
              ],
            },
          ],
          cta: "Need precise grinding? Contact us to learn more about our services.",
        },
      ],
    },

    reparatur: {
      title: "Repair and Geometry Modification",
      paragraph: "Our repair and maintenance services",
      subServices: [
        {
          title: "Optimization",
          description:
            "Extend the life of your tools with our repair services.",
          paragraph:
            "We specialize in restoring worn molds and tools to their original condition and making modifications to the geometry.",
          nestedList: [
            {
              title: "Capabilities:",
              list: [
                "Complete tool refurbishment",
                "Material restoration through welding and machining",
              ],
            },
          ],
          cta: "Interested in renovating your tools? Contact our team for professional renovation services.",
        },
        {
          title: "Overhaul",
          description: "A complete overhaul of your molds",
          paragraph:
            "A complete overhaul includes disassembling, inspecting, and repairing your tools to bring them back to peak performance. We focus on addressing wear, damage, and any underlying issues that could affect future production.",
          nestedList: [
            {
              title: "Our Process",
              list: [
                "Complete tool disassembly",
                "Detailed inspection for damage or wear",
                "Repairs and improvements as needed",
              ],
            },
          ],
          cta: "Want to overhaul your tools? Contact us for more information.",
        },
        {
          title: "Tool Repair",
          description: "Tools like new again!",
          paragraph:
            "Our tool repair services handle everything from surface damage to mechanical problems. Whether you need minor repairs or a complete rebuild, our team has the expertise to restore your tools to like-new condition.",
          nestedList: [
            {
              title: "Services include:",
              list: [
                "Material deposition through laser welding",
                "Rework through all manufacturing processes",
              ],
            },
          ],
          cta: "Contact us for fast and reliable tool repairs.",
        },
      ],
    },
  },

  contact: {
    title: "Contact Us",
    paragraph:
      "We'd love to hear from you! Whether you have a question, need a quote, or want to discuss a new project, don't hesitate to reach out to us.",
    phone: "Phone",
    hours: "Business Hours",
    opendays: "Monday - Friday: 7:00 AM - 4:00 PM",
    form: {
      title: "Contact Form",
      paragraph: "We will respond as soon as possible",
      textarea: "Enter your message here",
      submit: "Send",
    },
  },

  about: {
    title: "About Us",
    paragraph: "Formenwerkstatt, where innovation meets precision.",
    sectionTitle: "Team Formenwerkstatt",
    sectionParagraph:
      "At our company, we take pride in a team that combines experience, craftsmanship, and a passion for precision. Each member brings a unique set of skills, from advanced tool modifications to fine-tuning injection molds, ensuring that every project is executed with excellence. We work in a collaborative, family-like environment, where communication is open, and every opinion is valued. Our goal is to not only meet but exceed expectations, delivering high-quality solutions on time, every time. Meet the people who make this possible—dedicated professionals driven by innovation and a commitment to excellence.",
    description:
      "In the heart of Reichelsheim, Odenwald, we specialize in turning your ideas into tangible results. Our fully equipped facility enables us to offer a comprehensive range of services from mold-making to high-precision machining.",
    cta: "Contact us to discuss how we can implement your tool concept precisely and efficiently.",
    ctaList: [
      "Reliable and punctual delivery, ensuring your projects stay on schedule",
      "Personal and accessible communication, with a knowledgeable representative always available to assist you",
      "High-quality craftsmanship and precision engineering for optimal results",
    ],
  },

  jobs: {
    title: "Jobs",
    paragraph: "The next step of your career starts here",
    sectionTitle: "Join Our Expert Team",
    sectionParagraph:
      "At our Odenwald-based workshop, we specialize in the complete process of mold production—ranging from raw steel to perfectly finished parts. As a trusted B2B partner, we take pride in our precision, efficiency, and commitment to on-time delivery. If you are an experienced engineer passionate about CNC machining, milling, turning, and mold repair, our team might be the perfect fit for you. Explore the opportunities below and become part of a company that values expertise and reliability.",
    sectionList: [
      "A dynamic work environment focused on innovation and excellence in mold production.",
      "Hands-on experience with the latest CNC and laser engraving technology.",
      "A team-oriented atmosphere that encourages growth and development.",
    ],
    ads: [
      {
        title: "Unsolicited Application",
        paragraph:
          "To strengthen our team, we are looking for an experienced full-time employee for our tool and mold-making department.",
        content: [
          {
            title:
              "These could soon be your demanding and exciting areas of responsibility:",
            bullets: [
              "Modification and maintenance of our high-quality injection molding tools",
              "Support for the injection molding department with minor repairs to injection molding tools during production",
              "All tasks related to the extended workbench (grinding, polishing, fitting, etc.)",
              "Maintenance and repair of simple assembly machines",
              "Basic assistance tasks",
            ],
          },
          {
            title: "What you can expect from us:",
            bullets: [
              "A permanent employment contract",
              "Independent work with challenging tasks",
              "Responsibility in a successful company",
              "A constructive, productive, and highly innovative work environment",
              "Flat hierarchies, short decision-making, and communication paths",
              "A pleasant, family-like working atmosphere and fair interaction within a dedicated team - a creative feel-good atmosphere",
              "Performance-based compensation",
              "Regular working hours in a single-shift operation",
            ],
          },
          {
            title: "What you should bring:",
            bullets: [
              "Professional experience in the mentioned areas of tool and mold making",
              "Craftsmanship, quick comprehension, good technical and mechanical understanding",
              "Teamwork skills, reliability, punctuality, time management, and diligence",
            ],
          },
        ],
        cta: "Have we sparked your interest? We look forward to your application. If you are interested in taking on a responsible role in our team, we also welcome your unsolicited application with a detailed profile.",
      },
    ],
  },
} as const;
