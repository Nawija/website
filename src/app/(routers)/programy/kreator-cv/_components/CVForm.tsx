import React, { useState } from "react";

type CVFormProps = {
    onGenerate: (
        name: string,
        email: string,
        phone: string,
        skills: { id: number; skill: string }[],
        experience: { id: number; jobTitle: string; company: string; duration: string; description: string }[]
    ) => void;
};

const CVForm: React.FC<CVFormProps> = ({ onGenerate }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [skills, setSkills] = useState<{ id: number; skill: string }[]>([]);
    const [experience, setExperience] = useState<
        { id: number; jobTitle: string; company: string; duration: string; description: string }[]
    >([]);

    const handleAddSkill = () => {
        setSkills([...skills, { id: skills.length, skill: "" }]);
    };

    const handleSkillChange = (index: number, value: string) => {
        const newSkills = skills.map((skill, i) =>
            i === index ? { ...skill, skill: value } : skill
        );
        setSkills(newSkills);
    };

    const handleAddExperience = () => {
        setExperience([
            ...experience,
            { id: experience.length, jobTitle: "", company: "", duration: "", description: "" },
        ]);
    };

    const handleExperienceChange = (
        index: number,
        field: string,
        value: string
    ) => {
        const newExperience = experience.map((exp, i) =>
            i === index ? { ...exp, [field]: value } : exp
        );
        setExperience(newExperience);
    };

    const handleSubmit = () => {
        onGenerate(name, email, phone, skills, experience);
    };

    return (
        <div className="p-4 border border-gray-300 w-1/3 sticky top-0 rounded-md shadow-md">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Phone
                </label>
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Skills
                </label>
                {skills.map((skill, index) => (
                    <input
                        key={skill.id}
                        type="text"
                        value={skill.skill}
                        onChange={(e) =>
                            handleSkillChange(index, e.target.value)
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-2"
                    />
                ))}
                <button
                    type="button"
                    onClick={handleAddSkill}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Add Skill
                </button>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Experience
                </label>
                {experience.map((exp, index) => (
                    <div key={exp.id} className="mb-2">
                        <input
                            type="text"
                            placeholder="Job Title"
                            value={exp.jobTitle}
                            onChange={(e) =>
                                handleExperienceChange(
                                    index,
                                    "jobTitle",
                                    e.target.value
                                )
                            }
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Company"
                            value={exp.company}
                            onChange={(e) =>
                                handleExperienceChange(
                                    index,
                                    "company",
                                    e.target.value
                                )
                            }
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Duration"
                            value={exp.duration}
                            onChange={(e) =>
                                handleExperienceChange(
                                    index,
                                    "duration",
                                    e.target.value
                                )
                            }
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={exp.description}
                            onChange={(e) =>
                                handleExperienceChange(
                                    index,
                                    "description",
                                    e.target.value
                                )
                            }
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-2"
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddExperience}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Add Experience
                </button>
            </div>
            <button
                type="button"
                onClick={handleSubmit}
                className="bg-green-500 text-white p-2 rounded"
            >
                Generate CV
            </button>
        </div>
    );
};

export default CVForm;
