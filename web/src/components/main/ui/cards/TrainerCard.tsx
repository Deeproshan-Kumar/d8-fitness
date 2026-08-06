import React from "react";
import { Link } from "react-router";

const TrainerCard: React.FC<TrainerCardProps> = ({
    name,
    role,
    image,
    specialties,
    bio,
    socials,
}) => {
    return (
        <article className="group relative flex flex-col h-full overflow-hidden rounded-xl border border-on-primary/10 bg-secondary/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_rgb(147, 51, 234, 0.15)]">
            {/* Image Section */}
            <div className="relative aspect-1/1 w-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-90" />
                
                {/* Social icons sliding/fade overlay on hover */}
                {socials && (
                    <div className="absolute bottom-4 right-4 flex gap-2 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {socials.instagram && (
                            <Link
                                to={socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 backdrop-blur-md text-on-primary hover:bg-primary transition-colors border border-primary/30"
                                aria-label={`${name}'s Instagram`}
                            >
                                
                            </Link>
                        )}
                        {socials.twitter && (
                            <Link
                                to={socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 backdrop-blur-md text-on-primary hover:bg-primary transition-colors border border-primary/30"
                                aria-label={`${name}'s Twitter`}
                            >
                                
                            </Link>
                        )}
                        {socials.linkedin && (
                            <Link
                                to={socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 backdrop-blur-md text-on-primary hover:bg-primary transition-colors border border-primary/30"
                                aria-label={`${name}'s LinkedIn`}
                            >
                                
                            </Link>
                        )}
                    </div>
                )}

                {/* Role badge */}
                <span className="absolute top-4 left-4 rounded-full bg-primary/25 border border-primary/40 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-primary-hover px-2.5 py-0.5">
                    {role}
                </span>
            </div>

            {/* Details Section */}
            <div className="flex flex-col flex-grow p-5">
                <h3>
                    {name}
                </h3>

                {bio && (
                    <p className="mt-2 text-sm text-quaternary line-clamp-2">
                        {bio}
                    </p>
                )}

                {/* Specialties tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {specialties.map((specialty, idx) => (
                        <span
                            key={idx}
                            className="inline-flex items-center rounded-sm bg-surface-3 px-2 py-0.5 text-xs font-medium text-body border border-tertiary"
                        >
                            {specialty}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default TrainerCard;