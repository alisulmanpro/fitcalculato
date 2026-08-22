import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function AuthorProfile() {
    return (
        <div className="card card-side bg-base-200 shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 border border-gray-100 rounded-2xl my-8">

            <div className="avatar shrink-0">
                <div className="ring-primary ring-offset-base-100 w-20 h-20 md:w-24 md:h-24 rounded-full ring-2 ring-offset-2 overflow-hidden relative">
                    <Image
                        src="/author.jpeg"
                        alt="Muhammad Noman Akram"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80px, 96px"
                        priority
                    />
                </div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col gap-2 text-center md:text-left">
                {/* Name & Title */}
                <h3 className="text-2xl font-bold text-base-content m-0 p-0">
                    Muhammad Noman Akram
                </h3>
                <p className="text-sm font-semibold text-primary m-0 p-0">
                    Health & Fitness Data Specialist & Lead Developer at FitCalculators
                </p>

                {/* Short Bio */}
                <p className="text-base text-gray-700 leading-relaxed max-w-prose">
                    Muhammad Noman Akram is a Medical and Fitness Writer & Researcher with 5+ years of experience in cardiovascular training and health technology. He is a certified endurance...
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                              <a
                                href="https://www.linkedin.com/in/muhammad-noman-akram-39b248167/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-sm btn-ghost hover:bg-primary/20 hover:text-primary transition-all duration-300"
                                aria-label="LinkedIn Profile"
                              >
                                <FaLinkedin className="size-5" />
                              </a>
                              <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-sm btn-ghost hover:bg-primary/20 hover:text-primary transition-all duration-300"
                                aria-label="Twitter Profile"
                              >
                                <FaXTwitter className="size-5" />
                              </a>
                              <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-sm btn-ghost hover:bg-primary/20 hover:text-primary transition-all duration-300"
                                aria-label="GitHub Profile"
                              >
                                <FaGithub className="size-5" />
                              </a>
                            </div>
            </div>

        </div>
    );
}