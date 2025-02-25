import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InfluencerOnboard = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        dob: "",
        gender: "",
        city: "",
        instagramHandle: "",
        followerCount: "",
        engagementRate: "",
        otherSocialLinks: "",
        primaryContentCategories: [],
        preferredBrandCollaborations: [],
        pastCollaborations: false,
        pastCollaborationExamples: "",
        preferredCompensationType: "",
        minimumBudget: "",
        preferredPostFormats: [],
        availability: "",
        idVerification: null,
        termsAgreement: false,
    });

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = () => {
        if (step === 1) {
            if (!formData.fullName || !formData.email || !formData.phoneNumber) {
                alert("Please fill in all required fields in step 1.");
                return;
            }
        } else if (step === 2) {
            if (!formData.instagramHandle) {
                alert("Please fill in the Instagram handle field.");
                return;
            }
        } else if (!formData.termsAgreement) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        alert("Form submitted successfully!\n" + JSON.stringify(formData, null, 2));
        navigate("/influencer/dashboard");
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === "checkbox") {
            if (name === "termsAgreement") {
                setFormData((prev) => ({ ...prev, [name]: checked }));
            } else {
                setFormData((prev) => {
                    const currentValues = prev[name] || [];
                    const updatedValues = checked
                        ? [...currentValues, value]
                        : currentValues.filter((item) => item !== value);
                    return { ...prev, [name]: updatedValues };
                });
            }
        } else if (type === "file") {
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, idVerification: e.target.files[0] }));
    };

    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black relative p-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 via-black/50 to-neutral-900/50 pointer-events-none"></div>
            <div className="w-full max-w-3xl bg-neutral-800/80 backdrop-blur-sm rounded-lg border border-neutral-700 p-8 shadow-lg">
                <div className="flex justify-center mb-6">
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={`w-10 h-10 rounded-full flex items-center justify-center mx-2 ${
                                step >= s ? 'bg-white text-black' : 'bg-neutral-700 text-gray-400'
                            }`}
                        >
                            {s}
                        </div>
                    ))}
                </div>

                <h1 className="text-2xl font-bold text-white text-center mb-8">
                    {step === 1 && "Basic Information"}
                    {step === 2 && "Social Media & Online Presence"}
                    {step === 3 && "Verification & Agreements"}
                </h1>


                <div className="space-y-6">
                    {step === 1 && (
                        <>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">Full Name <span className="text-red-500">*</span></label>
                                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address <span className="text-red-500">*</span></label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" required />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-1">Phone Number <span className="text-red-500">*</span></label>
                                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" required />
                            </div>
                            <div>
                                 <label htmlFor="dob" className="block text-sm font-medium text-gray-300 mb-1">Date of Birth <span className="text-red-500">*</span></label>
                                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"/>
                            </div>

                            <div>
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-300 mb-1">Gender <span className="text-red-500">*</span></label>
                                <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500">
                                    <option value="">Select...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                    <option value="prefer_not_to_say">Prefer not to say</option>
                                </select>
                            </div>
                            <div>
                                 <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">City & Location <span className="text-red-500">*</span></label>
                                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="City, Country" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"/>
                            </div>
                           </div>
                        </>
                    )}

                    {step === 2 && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="instagramHandle" className="block text-sm font-medium text-gray-300 mb-1">Instagram Handle <span className="text-red-500">*</span></label>
                                <input type="text" id="instagramHandle" name="instagramHandle" value={formData.instagramHandle} onChange={handleChange} placeholder="Instagram Handle" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" required />
                            </div>
                           
                           
                            <div>
                                <label htmlFor="otherSocialLinks" className="block text-sm font-medium text-gray-300 mb-1">Other Social Media Links (Optional)</label>
                                <input type="url" id="otherSocialLinks" name="otherSocialLinks" value={formData.otherSocialLinks} onChange={handleChange} placeholder="e.g. YouTube, Twitter" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" />
                            </div>
                            </div>
                            <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-300 mb-2">Primary Content Categories</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {["Fashion", "Food", "Tech", "Books", "Fitness", "Travel", "Lifestyle"].map((category) => (
                                        <label key={category} className="flex items-center text-white">
                                            <input type="checkbox" name="primaryContentCategories" value={category} checked={formData.primaryContentCategories.includes(category)} onChange={handleChange} className="mr-2 text-purple-500 focus:ring-purple-500 h-4 w-4" />
                                            {category}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Brand Collaborations</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {["Local Restaurants", "Cafes", "Events", "E-commerce"].map((brandType) => (
                                        <label key={brandType} className="flex items-center text-white">
                                            <input type="checkbox" name="preferredBrandCollaborations" value={brandType} checked={formData.preferredBrandCollaborations.includes(brandType)} onChange={handleChange} className="mr-2 text-purple-500 focus:ring-purple-500 h-4 w-4" />
                                            {brandType}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <label htmlFor="pastCollaborations" className="block text-sm font-medium text-gray-300 mb-1">Have you worked with brands before?</label>
                                <select id="pastCollaborations" name="pastCollaborations" value={formData.pastCollaborations} onChange={handleChange} className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500">
                                    <option value={false}>No</option>
                                    <option value={true}>Yes</option>
                                </select>
                            </div>
                            {formData.pastCollaborations && (
                                <div>
                                     <label htmlFor="pastCollaborationExamples" className="block text-sm font-medium text-gray-300 mb-1">Example Collaborations (Optional)</label>
                                        <textarea id="pastCollaborationExamples" name="pastCollaborationExamples" value={formData.pastCollaborationExamples} onChange={handleChange} placeholder="Links or descriptions" rows="3" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" />
                                </div>
                            )}
                             <div>
                                <label htmlFor="preferredCompensationType" className="block text-sm font-medium text-gray-300 mb-1">Preferred Compensation Type</label>
                                <select id="preferredCompensationType" name="preferredCompensationType" value={formData.preferredCompensationType} onChange={handleChange} className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500">
                                    <option value="">Select...</option>
                                    <option value="monetary">Monetary</option>
                                    <option value="free_products">Free Products</option>
                                    <option value="discounts">Discounts</option>
                                    <option value="barter">Barter</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="minimumBudget" className="block text-sm font-medium text-gray-300 mb-1">Minimum Budget for Paid Promotions (Optional)</label>
                                <input type="number" id="minimumBudget" name="minimumBudget" value={formData.minimumBudget} onChange={handleChange} placeholder="Minimum Budget" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" />
                            </div>
                            </div>
                         
                        </>
                    )}

                    {step === 3 && (
                      <>
                      <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Post Formats</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {["Reels", "Stories", "Static Posts", "Blog Posts"].map((format) => (
                                        <label key={format} className="flex items-center text-white">
                                            <input type="checkbox" name="preferredPostFormats" value={format} checked={formData.preferredPostFormats.includes(format)} onChange={handleChange} className="mr-2 text-purple-500 focus:ring-purple-500 h-4 w-4" />
                                            {format}
                                        </label>
                                    ))}
                                </div>
                            </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div>
                                <label htmlFor="availability" className="block text-sm font-medium text-gray-300 mb-1">Availability for Campaigns</label>
                                <select id="availability" name="availability" value={formData.availability} onChange={handleChange} className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500">
                                    <option value="">Select...</option>
                                    <option value="open">Open to collaborations now</option>
                                    <option value="future">Future interest</option>
                                </select>
                            </div>
                           
                           <div>
                               <label htmlFor="idVerification" className="block text-sm font-medium text-gray-300 mb-1">ID Verification <span className="text-red-500">*</span></label>
                                <input type="file" id="idVerification" name="idVerification" onChange={handleFileChange} className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" accept="image/*,.pdf" />
                                {formData.idVerification && (
                                    <p className="text-sm text-gray-400 mt-1">Selected File: {formData.idVerification.name}</p>
                                )}
                           </div>
                            </div>
                            <div className="mb-6">
                                    <label className="flex items-center text-white">
                                        <input type="checkbox" name="termsAgreement" checked={formData.termsAgreement} onChange={handleChange} className="mr-2 text-purple-500 focus:ring-purple-500 h-4 w-4" required />
                                        I agree to the Terms & Conditions
                                    </label>
                                </div>
                            </>
                    )}
                </div>

                <div className="flex justify-between mt-8">
                    {step > 1 && (
                        <button onClick={prevStep} className="px-6 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white transition-colors duration-200">Back</button>
                    )}
                    {step < 3 ? (
                        <button onClick={nextStep} className="px-6 py-2 rounded-lg bg-white hover:bg-gray-200 text-black transition-colors duration-200">Next</button>
                    ) : (
                        <button onClick={handleSubmit} className="px-6 py-2 rounded-lg bg-white hover:bg-gray-200 text-black transition-colors duration-200">Submit</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InfluencerOnboard;