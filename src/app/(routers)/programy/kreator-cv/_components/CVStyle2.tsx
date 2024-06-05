import { Phone } from "lucide-react";
import { CVStyleProps } from "../types";

export default function CVStyle2({
    name,
    email,
    phone,
    imgSrc,
    skills,
    experience,
}: CVStyleProps) {
    return (
        <div className="bg-white h-full w-full text-[10px] flex items-start text-black p-1">
            <div className="h-full bg-[#456E60] lg:w-[30%] text-white relative">
                <img
                    src={imgSrc}
                    alt="Profile"
                    style={{ objectFit: "cover" }}
                    className="h-[30%] w-full mr-2"
                />
                <div className="p-3 space-y-3">
                    <h1 className="font-bold text-[16px] lg:text-[20px] uppercase">
                        {name}
                    </h1>

                    <div className="text">
                        <h2 className="font-medium mb-1">Kontakt</h2>
                        <div className="w-full h-px bg-white absolute" />
                        <p className="mt-4">{email}</p>
                        <p className="flex items-center justify-center">
                            <Phone size={10} fill="white" className="mr-1" />
                            {phone}
                        </p>
                    </div>

                    <div className="mt-4">
                        <h2 className="font-semibold">Umie∆etności</h2>
                        <ul>
                            {skills.map((skill) => (
                                <li key={skill.id}>{skill.skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="p-4 space-y-6">
                <div>
                    <p className="font-medium">Profil Zawodowy</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus officiis non fugit.
                    </p>
                </div>
                <h2 className="font-medium">experience</h2>
                <ul>
                    {experience.map((exp) => (
                        <li key={exp.id}>
                            <strong>{exp.jobTitle}</strong> at {exp.company} (
                            {exp.duration})<p>{exp.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
