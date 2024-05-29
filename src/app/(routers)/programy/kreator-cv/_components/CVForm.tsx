import { useState } from "react";

type CVFormProps = {
    onGenerate: (
        name: string,
        email: string,
        phone: string,
        imgSrc: string,
        skills: { id: number; skill: string }[],
        experience: {
            id: number;
            jobTitle: string;
            company: string;
            duration: string;
            description: string;
        }[]
    ) => void;
};

const CVForm: React.FC<CVFormProps> = ({ onGenerate }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [imgSrc, setImgSrc] = useState<string>("");
    const [skills, setSkills] = useState<{ id: number; skill: string }[]>([]);
    const [experience, setExperience] = useState<
        {
            id: number;
            jobTitle: string;
            company: string;
            duration: string;
            description: string;
        }[]
    >([]);
    const [errors, setErrors] = useState<{ name?: string; imgSrc?: string }>(
        {}
    );

    const predefinedSkills = ["Prawo jazdy", "Angielski", "Niemiecki"];

    const handleCheckboxChange = (skill: string) => {
        const skillIndex = skills.findIndex((s) => s.skill === skill);
        if (skillIndex === -1) {
            setSkills([...skills, { id: skills.length, skill }]);
        } else {
            const newSkills = skills.filter((s) => s.skill !== skill);
            setSkills(newSkills);
        }
    };

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
            {
                id: experience.length,
                jobTitle: "",
                company: "",
                duration: "",
                description: "",
            },
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgSrc(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        const newErrors: { name?: string; imgSrc?: string } = {};
        if (!name) newErrors.name = "Pole imię jest wymagane";
        if (!imgSrc) newErrors.imgSrc = "CV bez zdjecia? - Pole Wymagane";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            onGenerate(name, email, phone, imgSrc, skills, experience);
        }
    };

    return (
        <div className="p-7 border border-gray-300 w-full lg:w-1/2">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Name*
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                )}
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
                    imgSrc*
                </label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                />
                {errors.imgSrc && (
                    <p className="text-red-500 text-sm">{errors.imgSrc}</p>
                )}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Skills
                </label>
                <div>
                    {predefinedSkills.map((skill) => (
                        <div key={skill} className="flex items-center mb-2">
                            <input
                                id={skill}
                                type="checkbox"
                                checked={skills.some((s) => s.skill === skill)}
                                onChange={() => handleCheckboxChange(skill)}
                                className="mr-2"
                            />
                            <label htmlFor={skill}>{skill}</label>
                        </div>
                    ))}
                </div>
                {skills
                    .filter((s) => !predefinedSkills.includes(s.skill))
                    .map((skill, index) => (
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
                    Add Custom Skill
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
                Wygeneruj CV
            </button>
        </div>
    );
};

export default CVForm;
