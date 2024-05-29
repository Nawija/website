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

export type CVStyleProps = {
    name: string;
    email: string;
    phone: string;
    imgSrc: string;
    skills: Skill[];
    experience: Experience[];
};
