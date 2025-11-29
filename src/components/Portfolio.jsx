import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Award,
  Code,
  Server,
  Cloud,
  Calendar,
} from "lucide-react";
import deepakImage from "../assets/deepak.jpg";
import deepakResume from "../assets/DeepakPatel_DevOps_Resume.pdf";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 text-gray-800 relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-sm">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg  font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
                Deepak Patel
              </h1>
              <div className="hidden md:flex space-x-6">
                {[
                  "Home",
                  "About",
                  "Experience",
                  "Projects",
                  "Certifications",
                  "Skills",
                  "Education",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm cursor-pointer text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-16 px-6"
        >
          <div className="container mx-auto text-center max-w-4xl">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-br from-blue-500 to-purple-600 p-1 mb-6 shadow-2xl shadow-blue-500/30">
                <img
                  src={deepakImage}
                  className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl font-semibold bg-linear-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent"
                />
              </div>
            </div>
            <h1 className="text-5xl pb-3 md:text-6xl font-bold mb-3 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Deepak Patel
            </h1>
            <p className="text-xl text-gray-700 mb-2 font-medium">
              DevOps Engineer
            </p>
            <p className="text-sm text-gray-600 mb-8 tracking-wide">
              Build • Ship • Deploy
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="https://www.linkedin.com/in/deepakpatel-devops/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-200/50"
              >
                <Linkedin size={20} className="text-blue-600" />
              </a>
              <a
                href="https://github.com/deepakxtechx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-xl hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-200/50"
              >
                <Github size={20} className="text-purple-600" />
              </a>
              <a
                href="mailto:deepakxtechx@gmail.com"
                className="p-3 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-xl hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-pink-200/50"
              >
                <Mail size={20} className="text-pink-600" />
              </a>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
            >
              Get In Touch
            </button>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-4 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What I Do
            </h2>
            {/* First Row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                  <Cloud className="text-orange-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Cloud Platform
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Hands-on experience with AWS services like EC2, VPC, IAM, S3, RDS, EKS, ECS and ECR for cloud-based deployments.
                </p>
              </div>
               

               <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center">
                  <svg
                    className="text-pink-600"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Containerization
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Docker and Kubernetes for container orchestration and
                  microservices architecture.
                </p>
              </div>
              

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <Server className="text-blue-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Infrastructure as Code
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Terraform and Ansible for provisioning and managing
                  cloud resources.
                </p>
              </div>

              
            </div>

            {/* Second Row - 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                  <Code className="text-purple-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  CI/CD Pipelines
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Automated build, test, and deployment workflows using Jenkins,
                  GitHub Actions, and more.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl hover:shadow-cyan-200/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center">
                  <svg
                    className="text-cyan-600"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9M13 17V5M8 17v-3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Monitoring & Logging
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tools like Prometheus, Grafana, and AWS CloudWatch to
                  monitor system performance and troubleshoot issues
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6">
  <div className="container mx-auto max-w-4xl">
    
    <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      About Me
    </h2>

    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl shadow-blue-100/50">

      {/* Paragraph 1 */}
      <p className="text-base text-gray-700 leading-relaxed mb-5">
        A DevOps Engineer driven by curiosity and a love for automation, scalability, and continuous improvement.
        My journey into DevOps began 1.5 years ago when I started exploring how modern cloud and automation tools 
        transform software delivery.
      </p>

      {/* Paragraph 2 */}
      <p className="text-base text-gray-700 leading-relaxed mb-5">
        I completed a 3-month Cloud Training Program, where I gained hands-on experience with multiple AWS services 
        and DevOps tools, and learned how to manage applications, automate workflows, and implement cloud-native solutions.
      </p>

      {/* Paragraph 3 */}
      <p className="text-base text-gray-700 leading-relaxed">
        I’ve worked on multiple self-driven projects — setting up CI/CD pipelines, automating infrastructure with 
        Terraform, containerizing workloads with Docker and Kubernetes, and experimenting with monitoring stacks — 
        all to deepen my understanding of real-world DevOps practices.
      </p>

      {/* Contact Info Cards */}
      
    </div>
  </div>
</section>

{/* this is the 1st experience section 

 <section id="experience" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>

              <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    AWS Re/start Program Trainee
                  </h3>
                  <p className="text-base text-gray-700 mb-2 font-medium">
                    Magic Bus India Foundation
                  </p>
                  <p className="text-sm text-gray-600 flex items-center md:justify-end">
                    <Calendar size={16} className="mr-1.5 text-blue-600" />
                    June 2024 – Sept 2024
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-linear-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 font-bold">▹</span>
                      <span>
                        Completed the AWS re/Start Cloud Computing Programme in collaboration with Accenture and Magic Bus India Foundation! 
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2 font-bold">▹</span>
                      <span>
                        Gained hands-on experience with multiple AWS services and DevOps tools, and learned how to manage applications, 
                        automate workflows, and implement cloud-native solutions.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
*/}
        <section id="experience" className="py-20 px-6">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Experience
    </h2>

    {/* outer relative only needed for md+ centered timeline */}
    <div className="relative">
      {/* CENTER LINE for md+ screens */}
      <div
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full
                   bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"
        aria-hidden="true"
      />

      {/* Single timeline entry */}
      <div className="mb-12 flex flex-col md:flex-row items-start md:items-center">
        {/* LEFT COLUMN - on md it's the left side; on mobile it's full width above */}
        <div className="flex-1 md:w-1/2 md:pr-8 text-left md:text-right">
          <h3 className="text-lg font-bold text-gray-800 mb-1">AWS Re/start Program Trainee</h3>
          <p className="text-base text-gray-700 mb-2 font-medium">Magic Bus India Foundation</p>
          <p className="text-sm text-gray-600 flex items-center md:justify-end">
            <Calendar size={16} className="mr-1.5 text-blue-600" />
            June 2024 – Sept 2024
          </p>
        </div>

        {/* CENTER MARKER (responsive) */}
        <div className="flex items-start md:items-center">
          {/* Mobile marker & left vertical accent for mobile: visible on small screens */}
          <div
            className="md:hidden flex items-center"
            aria-hidden="true"
            style={{ marginRight: '0.5rem' }}
          >
            {/* thin vertical accent for mobile entries */}
            <div className="w-1 h-full bg-gradient-to-b from-blue-400 to-pink-400 rounded" />
            {/* circular marker */}
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-white shadow-lg -translate-y-2" />
          </div>

          {/* Marker for md+ placed over center line */}
          <div className="hidden md:flex items-center justify-center w-16">
            <div className="relative z-10">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - on md it's the right side; on mobile it's full width below */}
        <div className="flex-1 md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <ul className="space-y-2.5 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 font-bold">▹</span>
              <span>
                Completed the AWS re/Start Cloud Computing Programme in collaboration with Accenture and Magic Bus India Foundation!
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2 font-bold">▹</span>
              <span>
                Gained hands-on experience with multiple AWS services and DevOps tools, and learned how to manage applications,
                automate workflows, and implement cloud-native solutions.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Add more entries by duplicating the entry block above */}
    </div>
  </div>
</section>


        <section id="projects" className="py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 hover:border-blue-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-200/50">
                <div className="inline-block px-3 py-1 bg-linear-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full mb-3">
                  DevOps
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  Deployed Gemini Clone Application on GCP
                </h3>
                <ul className="text-sm text-gray-600 mb-4 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Built a robust CI/CD pipeline using Jenkins to automate the process. 
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Implemented GitOps workflow using ArgoCD, enabling continuous deployments from GitHub to the Kubernetes cluster
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Integrated Gemini AI APIs with secure OAuth 2.0 authentication, ensuring controlled and secure access to AI functionalities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Orchestrated cloud-native deployments on Kubernetes to achieve scalable, resilient, and containerized application infrastructure.
                    </span>
                  </li>
                </ul>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/deepakxtechx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-xs bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-all text-gray-700 font-medium"
                  >
                    <Github size={14} className="mr-1.5" />
                    Code
                  </a>
                  {/* <button className="flex items-center px-4 py-2 text-xs bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-md">
                    <ExternalLink size={14} className="mr-1.5" />
                    Live
                  </button> */}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 hover:border-purple-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-200/50">
                <div className="inline-block px-3 py-1 bg-linear-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full mb-3">
                  DevSecOps
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  Flask Web App Deployment
                </h3>
                <ul className="text-sm text-gray-600 mb-4 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Demonstrates the implementation of a CI/CD pipeline for deploying a two-tier application.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>The Process is fully automated using Jenkins , docker and github webhooks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>The pipeline follow DevSecOps with security checks via trivy image scan.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Project ensure continuous integration, continuos delivery and security throughout the software delivery lifecycle.</span>
                  </li>
                </ul>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/deepakxtechx/two-tier-flask-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-xs bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-all text-gray-700 font-medium"
                  >
                    <Github size={14} className="mr-1.5" />
                    Code
                  </a>
                  {/*<button className="flex items-center px-4 py-2 text-xs bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium shadow-md">
                    <ExternalLink size={14} className="mr-1.5" />
                    Live
                  </button>*/}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20 px-6">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Certifications
    </h2>

    <div className="space-y-6">

      {/* CKA FIRST */}
      <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl mr-4 shadow-lg">
            <Award className="text-white" size={28} />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-800">
              Certified Kubernetes Administrator (CKA)
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              Linux Foundation
            </p>
          </div>
        </div>

        <div className="bg-linear-to-br from-purple-50 to-pink-50 border border-purple-200/50 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold text-blue-600">Issue Date:</span>{" "}
            October 13, 2025
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold text-purple-600">Expiry Date:</span>{" "}
            October 14, 2027
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-pink-600">Credential ID:</span>{" "}
            LF-0wtqexiqp2
          </p>
        </div>

        <a
          href="https://www.credly.com/badges/b2f046ac-7819-40a5-afa0-7e95082a7bd6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
        >
          <ExternalLink size={16} className="mr-1.5" />
          Verify Certification
        </a>
      </div>

      {/* AWS SECOND */}
      <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-linear-to-br from-orange-400 to-orange-600 rounded-xl mr-4 shadow-lg">
            <Award className="text-white" size={28} />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-800">
              AWS Certified Cloud Practitioner (CLF-C02)
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              Amazon Web Services
            </p>
          </div>
        </div>

        <div className="bg-linear-to-br from-blue-50 to-purple-50 border border-blue-200/50 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold text-blue-600">Issue Date:</span>{" "}
            October 3, 2024
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold text-purple-600">Expiry Date:</span>{" "}
            October 3, 2027
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-pink-600">Credential ID:</span>{" "}
            Oa95af381d8e4772bef9662fec15a290
          </p>
        </div>

        <a
          href="https://www.credly.com/badges/118f9d7e-e295-400d-ab6a-23a294e19e95"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <ExternalLink size={16} className="mr-1.5" />
          Verify Certification
        </a>
      </div>

    </div>
  </div>
</section>


        <section id="skills" className="py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/50 shadow-lg hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg mr-2">
                    <Cloud size={18} className="text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800">
                    Cloud Services
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["EC2", "VPC", "IAM", "S3", "RDS", "EKS"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-linear-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-lg text-xs text-blue-700 font-medium"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/50 shadow-lg hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-linear-to-br from-purple-400 to-purple-600 rounded-lg mr-2">
                    <Server size={18} className="text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800">
                    Container & Orchestration
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Kubernetes"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-linear-to-r from-purple-100 to-purple-200 border border-purple-300 rounded-lg text-xs text-purple-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/50 shadow-lg hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-linear-to-br from-pink-400 to-pink-600 rounded-lg mr-2">
                    <Code size={18} className="text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800">
                    CI/CD & Automation
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Jenkins", "GitLab", "Github Actions"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-linear-to-r from-pink-100 to-pink-200 border border-pink-300 rounded-lg text-xs text-pink-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/50 shadow-lg hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-linear-to-br from-indigo-400 to-indigo-600 rounded-lg mr-2">
                    <Server size={18} className="text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800">
                    Infrastructure as Code
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Terraform", "Ansible"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-linear-to-r from-indigo-100 to-indigo-200 border border-indigo-300 rounded-lg text-xs text-indigo-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/50 shadow-lg hover:shadow-xl hover:shadow-cyan-200/50 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-linear-to-br from-cyan-400 to-cyan-600 rounded-lg mr-2">
                    <Award size={18} className="text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800">
                    Monitoring & Security
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Prometheus", "Grafana"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-linear-to-r from-cyan-100 to-cyan-200 border border-cyan-300 rounded-lg text-xs text-cyan-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/50 shadow-lg hover:shadow-xl hover:shadow-emerald-200/50 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-lg mr-2">
                    <Code size={18} className="text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800">
                    Programming & Version Control
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Bash", "Git", "GitHub"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-linear-to-r from-emerald-100 to-emerald-200 border border-emerald-300 rounded-lg text-xs text-emerald-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-5">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      Master of Computer Application (MCA)
                    </h3>
                    <p className="text-sm text-gray-700 mt-1 font-medium">
                      Thakur Institute Of Management Studies, Career Development
                      & Research
                    </p>
                     <p className="text-sm text-gray-700 mt-1 font-medium">
                      • Autonomous
                    </p>
                  </div>
                  <span className="text-xs text-white font-semibold px-3 py-1.5 bg-linear-to-r from-purple-500 to-pink-500 rounded-full shadow-md">
                    Pursuing
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-2 flex items-center">
                  <Calendar size={14} className="mr-1.5 text-blue-600" />
                   2026
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      Bachelor of Science in Information Technology (BSC-IT)
                    </h3>
                    <p className="text-sm text-gray-700 mt-1 font-medium">
                      Bunts Sangha Mumbai
                    </p>
                     <p className="text-sm text-gray-700 mt-1 font-medium">
                     • Mumbai University
                    </p>
                  </div>
                  <span className="text-xs text-white font-semibold px-3 py-1.5 bg-linear-to-r from-purple-500 to-pink-500 rounded-full shadow-md">
                    CGPA- 7.9
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-2 flex items-center">
                  <Calendar size={14} className="mr-1.5 text-purple-600" />
                  2024
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      HSC (PCMB)
                    </h3>
                    <p className="text-sm text-gray-700 mt-1 font-medium">
                      National Sarvodaya High School and Junior College
                    </p>
                     <p className="text-sm text-gray-700 mt-1 font-medium">
                      • Maharastra Board
                    </p>
                  </div>
                  <span className="text-xs text-white font-semibold px-3 py-1.5 bg-linear-to-r from-purple-500 to-pink-500 rounded-full shadow-md">
                    76%
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-2 flex items-center">
                  <Calendar size={14} className="mr-1.5 text-blue-600" />
                  2021
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      SSC 
                    </h3>
                    <p className="text-sm text-gray-700 mt-1 font-medium">
                      Shree Sanatan Dharm Vidyalaya
                    </p>
                     <p className="text-sm text-gray-700 mt-1 font-medium">
                      • Maharastra Board
                    </p>
                  </div>
                  <span className="text-xs text-white font-semibold px-3 py-1.5 bg-linear-to-r from-purple-500 to-pink-500 rounded-full shadow-md">
                    69%
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-2 flex items-center">
                  <Calendar size={14} className="mr-1.5 text-purple-600" />
                  2019
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resume
            </h2>
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600 mb-6 font-medium">
                  View or download my complete resume
                </p>
                <a
                  href={deepakResume}
                  download="Deepak_Patel_Resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </div>
              <div className="bg-linear-to-br from-blue-50 to-purple-50 border border-blue-200/50 rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src={deepakResume}
                  className="w-full h-96 md:h-[600px]"
                  title="Resume Preview"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl">
              <p className="text-center text-sm text-gray-700 mb-8 leading-relaxed font-medium">
                Open to freelance work, technical collaborations, and new opportunities. Feel free to reach out.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <a
                  href="mailto:deepakpatelofficialll@gmail.com"
                  className="flex items-center p-5 bg-linear-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-xl hover:shadow-lg hover:shadow-blue-200/50 transition-all"
                >
                  <div className="p-3 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg mr-3 shadow-md">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-0.5 font-medium">
                      Email
                    </p>
                    <p className="text-sm text-gray-800 font-semibold">
                      deepakxtechx@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+918355911369"
                  className="flex items-center p-5 bg-linear-to-br from-purple-50 to-purple-100/50 border border-purple-200 rounded-xl hover:shadow-lg hover:shadow-purple-200/50 transition-all"
                >
                  <div className="p-3 bg-linear-to-br from-purple-500 to-purple-600 rounded-lg mr-3 shadow-md">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-0.5 font-medium">
                      Phone
                    </p>
                    <p className="text-sm text-gray-800 font-semibold">
                      +91 8355911369
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/deepakpatel-devops/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-5 bg-linear-to-br from-pink-50 to-pink-100/50 border border-pink-200 rounded-xl hover:shadow-lg hover:shadow-pink-200/50 transition-all"
                >
                  <div className="p-3 bg-linear-to-br from-pink-500 to-pink-600 rounded-lg mr-3 shadow-md">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-0.5 font-medium">
                      LinkedIn
                    </p>
                    <p className="text-sm text-gray-800 font-semibold">
                      Deepak Patel
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/deepakxtechx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-5 bg-linear-to-br from-indigo-50 to-indigo-100/50 border border-indigo-200 rounded-xl hover:shadow-lg hover:shadow-indigo-200/50 transition-all"
                >
                  <div className="p-3 bg-linear-to-br from-indigo-500 to-indigo-600 rounded-lg mr-3 shadow-md">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-0.5 font-medium">
                      GitHub
                    </p>
                    <p className="text-sm text-gray-800 font-semibold">
                      deepakxtechx
                    </p>
                  </div>
                </a>
              </div>

              <div className="text-center">
                <a
                  href="mailto:deepakxtechx@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
                >
                  <Mail size={18} className="mr-2" />
                  Send Me an Email
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 px-6 border-t border-gray-200/50">
          <div className="container mx-auto text-center">
            <p className="text-xs text-gray-600 font-medium">
              © 2025 Deepak Patel. Built with React & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
