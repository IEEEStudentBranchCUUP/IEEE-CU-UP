import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Loader2, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Team member interface
interface TeamMember {
  id: number;
  name: string;
  role: string;
  department?: string;
  email: string;
  imageUrl: string;
  category: "faculty" | "core" | "tech" | "media" | "events" | "anchor" | "marketing";
  bio?: string;
  linkedin?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    instagram?: string;
  };
}

export default function Team() {
  // Mock data with local images - replace with your actual data
  const members: TeamMember[] = [
    // Faculty Advisors
    {
      id: 1,
      name: "Dr. Ajay Kumar Singh",
      role: "HOD",
      department: "School of Computer Science and Engineering",
      email: "rkumar@ieee-cu.edu",
      linkedin: "https://linkedin.com/in/ajay-kumar-singh",
      imageUrl: "/images/team/sir1.png",
      category: "faculty",
    },
    {
      id: 2,
      name: "Dr. Vikash Kumar Mishra",
      role: "Branch Counsellor, IEEE Student Branch",
      department: "School of Computer Science and Engineering",
      email: "priya.sharma@ieee-cu.edu",
      linkedin: "https://linkedin.com/in/vikash-mishra",
      imageUrl: "/images/team/sir2.png",
      category: "faculty",
    },
    {
      id: 3,
      name: "Dr. Amit Kumar Mishra",
      role: "Faculty Advisor",
      department: "School of Computer Science and Engineering",
      email: "priya.sharma@ieee-cu.edu",
      linkedin: "https://linkedin.com/in/amit-mishra",
      imageUrl: "/images/team/sir3.png",
      category: "faculty",
    },
    
    // Core Committee
    {
      id: 4,
      name: "Raaj Shekhar",
      role: "Chairperson",
      department: "M.Tech. CSE - AI/ML",
      email: "25LMCS10042@culkomail.in",
      linkedin: "www.linkedin.com/in/raaj-shekhar-65128b1a1",
      imageUrl: "/images/team/chairperson.png",
      category: "core",
      bio: "Leading IEEE CU towards technological excellence",
    },
    {
      id: 5,
      name: "Ayan Ahmad Khan",
      role: "Vice Chairperson",
      department: "B.Tech. CSE - Core",
      email: "25LBCS1294@culkomail.in",
      linkedin: "https://www.linkedin.com/in/-ayankhan",
      imageUrl: "/images/team/vice-chair.jpg",
      category: "core",
      bio: "Driven by innovation and student-led initiatives",
    },
    {
      id: 6,
      name: "Jayant Singh",
      role: "Secretary",
      department: "B.Tech. CSE - Core",
      email: "25LBCS1012@culkomail.in",
      linkedin: "https://www.linkedin.com/in/jayant-singh-ya",
      imageUrl: "/images/team/secretary.jpg",
      category: "core",
      bio: "Team coordination and event management",
    },
    {
      id: 7,
      name: "Suryansh Kumar Gupta",
      role: "Treasurer",
      department: "M.Tech. CSE - AI/ML",
      email: "25LMCS1005@culkomai.in",
      linkedin: "https://www.linkedin.com/in/suryansh549/",
      imageUrl: "/images/team/treasurer.png",
      category: "core",
      bio: "Financial management and budgeting",
    },
    
    // Technical Team
    {
      id: 12,
      name: "Sarfaraj Salim Khan",
      role: "Technical Lead",
      department: "M.Tech. CSE - AI/ML",
      email: "25LMCS1001@culkomail.in",
      linkedin: "https://www.linkedin.com/in/sarfaraj-salim-khan-8363b92ab/",
      imageUrl: "/images/team/tech-lead.jpg",
      category: "tech",
      bio: "Tech Lead managing technical direction and team coordination.",
    },
    {
      id: 13,
      name: "Mayank Kumar Mishra",
      role: "Tech Advisor",
      department: "M.Tech. CSE - AI/ML",
      email: "25LMCS1014@culkomail.in",
      linkedin: "https://in.linkedin.com/in/mayank-kumar-mishra-411971290",
      imageUrl: "/images/team/mayank.jpeg",
      category: "tech",
      bio: "Providing strategic technical guidance",
    },
    {
      id: 13,
      name: "Shashank Pandey",
      role: "Associate Technical Lead",
      department: "BCA (Hons.)",
      email: "25LBBC1048@culkomail.in",
      linkedin: "https://www.linkedin.com/in/shashank-pandey-067811392?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      imageUrl: "/images/team/tech1.jpeg",
      category: "tech",
      bio: "Associate Technical Lead managing development tasks.",
    },
    {
      id: 14,
      name: "Akshara Bajpai",
      role: "Technical Member",
      department: "B.Tech. IT",
      email: "25LBIT1024@culkomail.in",
      linkedin: "www.linkedin.com/in/akshara-bajpai-0a7559397",
      imageUrl: "/images/team/tech2.jpg",
      category: "tech",
      bio: "Technical support assisting in development.",
    },
    {
      id: 15,
      name: "Mayank Gautam",
      role: "Technical Member",
      department: "B.Tech. IT",
      email: "25LBIT1022@culkomail.in",
      linkedin: "https://www.linkedin.com/in/mayank-gautam-9140933aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imageUrl: "/images/team/tech3.jpg",
      category: "tech",
      bio: "Technical executive supporting development.",  
    },
    {
      id: 16,
      name: "Sampoorn Tripathi",
      role: "Technical Member",
      department: "B.Tech. CSE - Core",
      email: "25LBCS1261@culkomail.in",
      linkedin: "www.linkedin.com/in/sampoorn-tripathi-38121b354",
      imageUrl: "/images/team/tech4.jpg",
      category: "tech", 
      bio: "Technical team member contributing to system support.",   
    },
    
    // Marketing Team (NEW)
    {
      id: 23,
      name: "Ishan Yadav",
      role: "Marketing Lead",
      department: "",
      email: "ishan.yadav@culkomail.in",
      linkedin: "https://www.linkedin.com/in/ishan-yadav-49a4913ab?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      imageUrl: "/images/team/marketing1.jpg",
      category: "marketing",
    },
    {
      id: 24,
      name: "Aaradhya Gupta",
      role: "Marketing Lead",
      department: "",
      email: "aaradhya.gupta@culkomail.in",
      linkedin: "https://www.linkedin.com/in/aaradhyagupta21",
      imageUrl: "/images/team/marketing2.jpg",
      category: "marketing",
    },
    {
      id: 25,
      name: "Abhedya Pratap Singh",
      role: "Publicity",
      department: "",
      email: "abhedya.singh@culkomail.in",
      linkedin: "https://linkedin.com/in/abhedya-singh",
      imageUrl: "/images/team/marketing3.jpg",
      category: "marketing",
    },
    {
      id: 26,
      name: "Rohit Kumawat",
      role: "Membership",
      department: "",
      email: "rohit.kumawat@culkomail.in",
      linkedin: "https://www.linkedin.com/in/rohit-kumawat-7586a7394?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      imageUrl: "/images/team/marketing4.jpg",
      category: "marketing",
    },
    
    // Media Team (UPDATED as per your list)
    {
      id: 27,
      name: "Aadya Gupta",
      role: "Media Lead",
      department: "",
      email: "aadya.gupta@culkomail.in",
      linkedin: "https://linkedin.com/in/aadya-gupta",
      imageUrl: "/images/team/media-lead.jpg",
      category: "media",
    },
    {
      id: 28,
      name: "Kushagra Srivastava",
      role: "Social Media Handler",
      department: "",
      email: "kushagra.srivastava@culkomail.in",
      linkedin: "https://linkedin.com/in/kushagra-srivastava",
      imageUrl: "/images/team/social-media.jpg",
      category: "media",
    },
    {
      id: 29,
      name: "Abhinav Gupta",
      role: "Photographer",
      department: "",
      email: "abhinav.gupta@culkomail.in",
      linkedin: "https://linkedin.com/in/abhinav-gupta",
      imageUrl: "/images/team/photographer.jpg",
      category: "media",
    },
    {
      id: 30,
      name: "Ayush Pratap Singh",
      role: "Editor",
      department: "",
      email: "ayush.singh@culkomail.in",
      linkedin: "https://linkedin.com/in/ayush-singh",
      imageUrl: "/images/team/editor.jpg",
      category: "media",
    },
    {
      id: 31,
      name: "Naitik Srivastava",
      role: "Design",
      department: "",
      email: "naitik.srivastava@culkomail.in",
      linkedin: "https://www.linkedin.com/in/naitiksrivastava25",
      imageUrl: "/images/team/design.jpg",
      category: "media",
    },
    
    // Events Team (UPDATED as per your list)
    {
      id: 32,
      name: "Mohd. Humza",
      role: "Event Lead",
      department: "",
      email: "mohd.humza@culkomail.in",
      linkedin: "https://linkedin.com/in/mohd-humza",
      imageUrl: "/images/team/event-lead.jpg",
      category: "events",
    },
    {
      id: 33,
      name: "Paras Tiwari",
      role: "Event Team Member",
      department: "",
      email: "paras.tiwari@culkomail.in",
      linkedin: "https://www.linkedin.com/in/paras-tiwari-6ab5201b6?utm_source=share_via&utm_content=profile&utm_medium=member_android
",
      imageUrl: "/images/team/event1.jpg",
      category: "events",
    },
    {
      id: 34,
      name: "Animesh Mishra",
      role: "Event Team Member",
      department: "",
      email: "animesh.mishra@culkomail.in",
      linkedin: "https://linkedin.com/in/animesh-mishra",
      imageUrl: "/images/team/event2.jpg",
      category: "events",
    },
    {
      id: 35,
      name: "Abhedya Pratap Singh",
      role: "Event Team Member",
      department: "",
      email: "abhedya.singh@culkomail.in",
      linkedin: "https://linkedin.com/in/abhedya-singh",
      imageUrl: "/images/team/event3.jpg",
      category: "events",
    },
    {
      id: 36,
      name: "Ansh Pratap Verma",
      role: "Event Team Member",
      department: "",
      email: "ansh.verma@culkomail.in",
      linkedin: "https://www.linkedin.com/in/ansh-pratap-verma-00aab0337?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      imageUrl: "/images/team/event4.jpg",
      category: "events",
    },
    {
      id: 37,
      name: "Anubhav Singh",
      role: "Event Team Member",
      department: "",
      email: "anubhav.singh@culkomail.in",
      linkedin: "https://www.linkedin.com/in/anubhav-singh-a672353ab/
",
      imageUrl: "/images/team/event5.jpg",
      category: "events",
    },
    
    // Anchoring Team (UPDATED as per your list)
    {
      id: 38,
      name: "Kanika Singh",
      role: "Spokesperson / Anchoring Lead",
      department: "",
      email: "kanika.singh@culkomail.in",
      linkedin: "www.linkedin.com/in/kanika-singh-776ab0392",
      imageUrl: "/images/team/anchor-lead.jpg",
      category: "anchor",
    },
    {
      id: 39,
      name: "Pulkit Shukla",
      role: "Anchor",
      department: "",
      email: "pulkit.shukla@culkomail.in",
      linkedin: "https://www.linkedin.com/in/pulkit-shukla-b153693a7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      imageUrl: "/images/team/anchor1.jpg",
      category: "anchor",
    },
    {
      id: 40,
      name: "Ridham Taygi",
      role: "Anchor",
      department: "",
      email: "ridham.taygi@culkomail.in",
      linkedin: "https://linkedin.com/in/ridham-taygi",
      imageUrl: "/images/team/anchor2.jpg",
      category: "anchor",
    },
  ];

  // Filter members by category
  const faculty = members.filter(m => m.category === "faculty");
  const core = members.filter(m => m.category === "core");
  const tech = members.filter(m => m.category === "tech");
  const marketing = members.filter(m => m.category === "marketing");
  const media = members.filter(m => m.category === "media");
  const events = members.filter(m => m.category === "events");
  const anchor = members.filter(m => m.category === "anchor");

  // For loading state simulation (remove in production)
  const isLoading = false;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <div className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold text-foreground font-heading">Our Team</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated individuals who lead and drive our student branch forward.
            </p>
          </div>
        </div>

        <div className="container-custom py-20 space-y-24">
          {isLoading && (
             <div className="flex justify-center py-20">
               <Loader2 className="w-10 h-10 animate-spin text-primary" />
             </div>
          )}

          {/* Faculty Advisors */}
          {!isLoading && faculty.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-center mb-12 font-heading text-primary relative inline-block left-1/2 -translate-x-1/2">
                Faculty Advisors
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {faculty.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}

          {/* Core Committee */}
          {!isLoading && core.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-center mb-12 font-heading text-primary relative inline-block left-1/2 -translate-x-1/2">
                Core Committee
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {core.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}

          {/* Technical Team */}
          {!isLoading && tech.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-center mb-12 font-heading text-primary relative inline-block left-1/2 -translate-x-1/2">
                Technical Team
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {tech.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}

          {/* Marketing Team - NEW */}
          {!isLoading && marketing.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-center mb-12 font-heading text-primary relative inline-block left-1/2 -translate-x-1/2">
                Marketing Team
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {marketing.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}

          {/* Media Team */}
          {!isLoading && media.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-center mb-12 font-heading text-primary relative inline-block left-1/2 -translate-x-1/2">
                Media Team
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {media.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}

          {/* Events Team */}
          {!isLoading && events.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-center mb-12 font-heading text-primary relative inline-block left-1/2 -translate-x-1/2">
                Events Team
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {events.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}

          {/* Anchoring Team */}
          {!isLoading && anchor.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-center mb-12 font-heading text-primary relative inline-block left-1/2 -translate-x-1/2">
                Anchoring Team
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {anchor.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow text-center group"
    >
      <div className="aspect-square bg-slate-100 overflow-hidden relative">
        {member.imageUrl ? (
          <img 
            src={member.imageUrl} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${member.name.split(' ').join('+')}&background=random&color=fff&size=256`;
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 text-4xl font-bold">
            {member.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-foreground font-heading">{member.name}</h3>
        <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
        
        {member.department && (
          <p className="text-muted-foreground text-xs mb-3">{member.department}</p>
        )}
        
        {member.bio && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{member.bio}</p>
        )}

        <div className="flex justify-center gap-6 pt-4">
          {/* Email Icon */}
          {member.email && (
            <a 
              href={`mailto:${member.email}`}
              className="text-slate-400 hover:text-primary transition-colors p-2 hover:bg-gray-50 rounded-full"
              title={`Email ${member.name}`}
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
          
          {/* LinkedIn Icon */}
          {member.linkedin && (
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0077B5] transition-colors p-2 hover:bg-gray-50 rounded-full"
              title={`View ${member.name}'s LinkedIn`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          
          {/* Existing Social Links */}
          {member.socialLinks?.linkedin && (
            <a 
              href={member.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0077B5] transition-colors p-2 hover:bg-gray-50 rounded-full"
              title={`View ${member.name}'s LinkedIn`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.socialLinks?.twitter && (
            <a 
              href={member.socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#1DA1F2] transition-colors p-2 hover:bg-gray-50 rounded-full"
              title={`View ${member.name}'s Twitter`}
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
