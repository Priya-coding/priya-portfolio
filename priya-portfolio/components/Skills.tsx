"use client";

import Image from "next/image";

const skillsData = [
    { title: "Cloud Platform", icon: "/images/skills/cloud.png", skills: "AWS, Azure, GCP" },
    { title: "Infrastructure as Code (IaC)", icon: "/images/skills/iac.png", skills: "Terraform, Bicep, CloudFormation" },
    { title: "Containerization & Orchestration", icon: "/images/skills/containerization.png", skills: "Docker, Kubernetes, Helm, ArgoCD" },
    { title: "Web Design & Development", icon: "/images/skills/web.png", skills: "HTML, JavaScript, Profiling, Caching, Database Optimization" },
    { title: "Frontend JS Frameworks/Libraries", icon: "/images/skills/frontend.png", skills: "React, jQuery, Jest" },
    { title: "Backend JavaScript Frameworks", icon: "/images/skills/backend.png", skills: "Node.js, Express.js, REST APIs, GraphQL" },
    { title: "Database Management Systems", icon: "/images/skills/database.png", skills: "Postgres, MongoDB, MySQL, Redis" },
    { title: "Content Management Systems", icon: "/images/skills/cms.png", skills: "WordPress" },
    { title: "Programming Languages", icon: "/images/skills/programming.png", skills: "JavaScript, TypeScript, Python, C++, Bash, Shell Scripting" },
    { title: "Monitoring & Logging", icon: "/images/skills/monitoring.png", skills: "Grafana, Prometheus, ELK Stack, Azure Monitor" },
    { title: "Tools & DevOps", icon: "/images/skills/tools.png", skills: "Git, GitHub Actions, Jenkins, Azure DevOps, CI/CD" },
    { title: "Architectural Patterns", icon: "/images/skills/architecture.png", skills: "Microservices, Serverless, Event-Driven, Monolithic" },
    { title: "Performance Optimization", icon: "/images/skills/performance.png", skills: "Profiling, Caching, Database Optimization, Load Testing" },
    { title: "Security & Authentication", icon: "/images/skills/security.png", skills: "OAuth, OIDC, ESO, RBAC, JWT, Security Groups, IAM" },
];

export default function Skills() {
    return (
        <section className="text-white py-16 px-6 max-w-10xl mx-auto text-left">
            <h2 className="text-l font-bold mb-6 flex justify-center items-center">🎖️ <span className=" text-md font-light text-white">&nbsp;&nbsp;SKILLS  &nbsp;&nbsp;</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex items-center px-4 py-1 border border-gray-700 rounded-lg hover:border-white transition shadow-sm">
                        <Image src={skill.icon} alt={skill.title} width={30} height={30} className="mr-3" />
                        <div>
                            <h3 className="text-sm">{skill.title}</h3>
                            <p className="text-xs text-gray-300">{skill.skills}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
