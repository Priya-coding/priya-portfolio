"use client";

import Image from "next/image";

export default function WorkExperienceStudy() {
    return (
        <section className="flex flex-col items-center py-16 text-white relative">
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                {/* Work Experience Section */}
                <div className="relative flex flex-col space-y-8 pl-6 before:absolute before:top-10 before:left-0 before:h-full before:w-0.5 before:bg-gray-700">
                    <div className="relative -left-10 bg-gray-900 flex  px-4 py-2 rounded-lg shadow-md items-center mb-6">
                        <Image
                            src="/images/WorkExperience/work.png"
                            alt=" "
                            width={15}
                            height={15}
                            className="mr-2 filter brightness-0 invert"
                        />
                        <h2 className="text-sm text-white uppercase">Work Experience</h2>
                    </div>
                    <div className="relative space-y-8">
                        {/* RedSpace */}
                        <div className="relative group">
                            <div className="absolute -left-8 top-3 w-4 h-3 bg-white rounded-full shadow-lg transition-all group-hover:bg-white group-hover:w-7 group-hover:h-3 group-hover:translate-x-1"></div>
                            <div className="flex items-start space-x-6 transition-all group-hover:translate-x-2">
                                <Image src="/images/WorkExperience/RedSpace.JPG" alt="Company Logo" width={50} height={50} className="rounded-lg" />
                                <div>
                                    <h3 className="text-md font-semibold">RedSpace Inc.</h3>
                                    <p className="text-sm text-gray-400">Senior Software Developer (Nov 2020 - Jan 2025) - Halifax, Canada</p>
                                    <p className="text-xs text-gray-300 leading-relaxed mt-2">
                                    At RedSpace, I played a key role in developing a training website for a defense client using Azure, automating SharePoint configurations and optimizing API performance through JMeter and Azure Load Testing. I built a centralized documentation site, established CI/CD pipelines, and containerized microservices using Docker and Kubernetes. Additionally, I integrated Kafka, ESO, and Azure Log Analytics for secure and scalable pipeline management. I also led the development of a sports application platform, designing and deploying an ETL pipeline leveraging AWS services (Lambda, S3, SNS, SQS, EC2) and implementing Python-based data transformation and CloudWatch monitoring.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Mphasis */}
                        <div className="relative group">
                            <div className="absolute -left-8 top-3 w-4 h-3 bg-white rounded-full shadow-lg transition-all group-hover:bg-white group-hover:w-7 group-hover:h-3 group-hover:translate-x-1"></div>
                            <div className="flex items-start space-x-6 transition-all group-hover:translate-x-2">
                                <Image src="/images/WorkExperience/Mphasis.JPG" alt="Company Logo" width={50} height={50} className="rounded-lg" />
                                <div>
                                    <h3 className="text-md font-semibold">Mphais Ltd.</h3>
                                    <p className="text-sm text-gray-400">Delivery Module Lead (Nov 2019 - Jul 2020) - Bengaluru, India</p>
                                    <p className="text-xs text-gray-300 leading-relaxed mt-2">
                                    At Mphasis, I led the final module delivery for HPE Smart Storage devices, integrating device drivers, data exchange libraries, and third-party tools. I managed a team of three engineers to automate the build process using Python, significantly streamlining product integration. Additionally, I collaborated closely with clients, driving development across the SDLC, including requirement analysis, testing, and code reviews.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Siemens Healthineers */}
                        <div className="relative group">
                            <div className="absolute -left-8 top-3 w-4 h-3 bg-white rounded-full shadow-lg transition-all group-hover:bg-white group-hover:w-7 group-hover:h-3 group-hover:translate-x-1"></div>
                            <div className="flex items-start space-x-6 transition-all group-hover:translate-x-2">
                                <Image src="/images/WorkExperience/Siemens.JPG" alt="Company Logo" width={50} height={50} className="rounded-lg" />
                                <div>
                                    <h3 className="text-md font-semibold">Siemens Healthineers</h3>
                                    <p className="text-sm text-gray-400">Senior Software Engineer (Apr 2015 - Oct 2019) - Bengaluru, India</p>
                                    <p className="text-xs text-gray-300 leading-relaxed mt-2">
                                    At Siemens, I contributed to the Syngo Classic DICOM framework, enhancing secure patient image management using C++ with OOAD and multithreading. I led a team of four to create a tool for analyzing critical code changes, optimizing version control, and ensuring compliance with SLAs while resolving high-priority beta issues.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Wipro */}
                        <div className="relative group">
                            <div className="absolute -left-8 top-3 w-4 h-3 bg-white rounded-full shadow-lg transition-all group-hover:bg-white group-hover:w-7 group-hover:h-3 group-hover:translate-x-1"></div>
                            <div className="flex items-start space-x-6 transition-all group-hover:translate-x-2">
                                <Image src="/images/WorkExperience/Wipro.JPG" alt="Company Logo" width={50} height={50} className="rounded-lg" />
                                <div>
                                    <h3 className="text-md font-semibold">Previous Company</h3>
                                    <p className="text-sm text-gray-400">Software Engineer (Oct 2011 - Mar 2015) - Bengaluru, India</p>
                                    <p className="text-xs text-gray-300 leading-relaxed mt-2">
                                    At Wipro, I developed C++/MFC-based executables for Toshiba MFP and e-STUDIO devices, enabling key functionalities such as document scanning, job backup, and device status monitoring. I also led OEM module deployment, handling InstallShield packaging, release documentation, and version control, ensuring seamless software integration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Education Section */}
                <div className="relative flex flex-col space-y-8 pl-6 before:absolute before:top-10 before:left-0 before:h-full before:w-0.5 before:bg-gray-700 flex-shrink-0">
                    <div className="relative -left-10 flex bg-gray-900 bg-opacity-90 px-4 py-2 rounded-lg shadow-md items-center mb-6">
                        <Image
                            src="/images/Education/school.png"
                            alt=" "
                            width={15}
                            height={15}
                            className="mr-2 filter brightness-0 invert"
                        />
                        <h2 className="text-sm text-white uppercase">Education</h2>
                    </div>
                    <div className="relative space-y-8">
                        <div className="relative group">
                            <div className="absolute -left-8 top-3 w-4 h-3 bg-white rounded-full shadow-lg transition-all group-hover:bg-white group-hover:w-7 group-hover:h-3 group-hover:translate-x-1"></div>
                            <div className="flex items-start space-x-6 transition-all group-hover:translate-x-2">
                                <Image src="/images/Education/DIT.JPG" alt="University Logo" width={50} height={50} className="rounded-lg" />
                                <div>
                                    <h2 className="text-md font-semibold">Dehradun Institute of Technology</h2>
                                    <p className="text-sm text-gray-400">Bachelors in Technology Degree, Electronics & Communication Engineering (2008 - 2011)</p>
                                    <p className="text-sm text-gray-300 leading-relaxed mt-2">
                                        Dehradun, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
