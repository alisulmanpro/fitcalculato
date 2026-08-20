import Image from 'next/image';
import Link from 'next/link';

export default function AuthorProfile() {
    return (
        <div className="card card-side bg-base-200 shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-gray-100 rounded-2xl my-8">

            <div className="avatar shrink-0">
                <div className="ring-primary ring-offset-base-100 w-20 h-20 md:w-24 md:h-24 rounded-full ring-2 ring-offset-2 overflow-hidden relative">
                    <Image
                        src="/images/author-noman.jpg"
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
                    Medical/Fitness Writer & Researcher
                </p>

                {/* Short Bio */}
                <p className="text-base text-gray-700 leading-relaxed max-w-prose">
                    With 5+ years of experience in cardiovascular training and health technology, Muhammad is a certified endurance coach dedicated to simplifying complex fitness science.
                </p>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-4 mt-2">
                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-ghost btn-circle text-gray-500 hover:text-primary"
                        aria-label="LinkedIn Profile"
                    >
                        <Image
                            src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/linkedin.svg"
                            width={20}
                            height={20}
                            className="opacity-70 hover:opacity-100"
                            alt="LinkedIn"
                        />
                    </Link>

                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-ghost btn-circle text-gray-500 hover:text-primary"
                        aria-label="Twitter Profile"
                    >
                        <Image
                            src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/twitter.svg"
                            width={20}
                            height={20}
                            className="opacity-70 hover:opacity-100"
                            alt="Twitter"
                        />
                    </Link>
                </div>
            </div>

        </div>
    );
}