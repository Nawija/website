"use client";

import { IoAdd,IoRemove } from "react-icons/io5";

type FormData = {
    firstName: string;
    lastName: string;
    imgUrl: string;
    phoneNumber: string;
    email: string;
    additionalTexts: string[];
};

export default function SignatureForm({
    onFormSubmit,
    formData,
    setFormData,
    onAddText,
    onRemoveText,
    onChangeText,
}: {
    onFormSubmit: (data: FormData) => void;
    formData: FormData;
    setFormData: (data: FormData) => void;
    onAddText: () => void;
    onRemoveText: (index: number) => void;
    onChangeText: (index: number, value: string) => void;
}) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFormSubmit(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 p-6 bg-gray-100 border shadow-xl rounded-md"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Imię *
                </label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Nazwisko
                </label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Link do zdjęcia
                </label>
                <input
                    type="text"
                    name="imgUrl"
                    placeholder="Wklej URL zdjecia"
                    value={formData.imgUrl}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Numer telefonu
                </label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                        Dodatkowe informacje
                    </label>

                    <button
                        type="button"
                        onClick={onAddText}
                        className="mt-2 inline-flex justify-center p-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <IoAdd />
                    </button>
                </div>
                {formData.additionalTexts.map((text, index) => (
                    <div key={index} className="mt-2 flex items-center gap-2">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) =>
                                onChangeText(index, e.target.value)
                            }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <button
                            type="button"
                            onClick={() => onRemoveText(index)}
                            className="inline-flex justify-center p-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <IoRemove />
                        </button>
                    </div>
                ))}
            </div>

            <div>
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Wygeneruj Signatury
                </button>
            </div>
        </form>
    );
}
