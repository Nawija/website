import React from "react";

type Skill = {
    id: number;
    skill: string;
};

type Experience = {
    id: number;
    jobTitle: string;
    company: string;
    duration: string;
    description: string;
};

type CVStyleProps = {
    name: string;
    email: string;
    phone: string;
    skills: Skill[];
    experience: Experience[];
};

const CVStyle1: React.FC<CVStyleProps> = ({ name, email, phone, skills, experience }) => {
    return (
        <div className="p-4 border border-gray-300 rounded-md shadow-md">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Skills</h2>
                <ul>
                    {skills.map((skill) => (
                        <li key={skill.id}>{skill.skill}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Experience</h2>
                <ul>
                    {experience.map((exp) => (
                        <li key={exp.id}>
                            <strong>{exp.jobTitle}</strong> at {exp.company} ({exp.duration})
                            <p>{exp.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CVStyle1;
