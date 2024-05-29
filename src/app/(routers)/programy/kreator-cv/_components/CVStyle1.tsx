import { CVStyleProps } from "../types";

export default function CVStyle1({
    name,
    email,
    phone,
    imgSrc,
    skills,
    experience,
}: CVStyleProps) {
    return (
        <div className="bg-white h-full w-full text-[10px] flex items-start text-black">
            <div className="flex items-start justify-start bg-stone-300 flex-col h-full p-3">
                <div className="flex">
                    <img
                        src={imgSrc}
                        alt="Profile"
                        className="h-12 w-12 mr-2 rounded-full"
                    />

                    <div>
                        <h1 className="font-bold capitalize">{name}</h1>
                        <p>{email}</p>
                        <p>{phone}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="font-semibold">Umiejętności</h2>
                    <ul>
                        {skills.map((skill) => (
                            <li key={skill.id}>{skill.skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="p-4">
                <h2 className="font-semibold">Doświadczenie</h2>
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
