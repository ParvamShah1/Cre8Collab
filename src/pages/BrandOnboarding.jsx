import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BrandOnboarding = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        brandName: "",
        companyName: "",
        businessType: "",
        websiteURL: "",
        businessEmail: "",
        phoneNumber: "",
        city: "",
        socialMediaLinks: {},
        brandStory: "",
        targetAudience: "",
        preferredInfluencerType: "",
        campaignGoals: [],
        campaignBudgetRange: "",
        preferredContentFormats: [],
        pastCollaborations: false,
        pastCollaborationExamples: "",
        businessVerification: null,
        termsAgreement: false,
    });

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = () => {
        if (step === 1) {
            if (!formData.brandName || !formData.businessEmail || !formData.phoneNumber || !formData.businessType || !formData.socialMediaLinks.instagram) {
                alert("Please fill in all required fields in step 1.");
                return;
            }
        }
        if (step === 2 && !formData.termsAgreement) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        alert("Brand onboarding submitted successfully!\n" + JSON.stringify(formData, null, 2));
        navigate("/brand/dashboard");
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
        } else if (name.startsWith("socialMediaLinks.")) {
            const platform = name.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                socialMediaLinks: {
                    ...prev.socialMediaLinks,
                    [platform]: value,
                },
            }));

        }
         else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, businessVerification: e.target.files[0] }));
    };
    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black relative p-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 via-black/50 to-neutral-900/50 pointer-events-none"></div>
            <div className="w-full max-w-3xl bg-neutral-800/80 backdrop-blur-sm rounded-lg border border-neutral-700 p-8 shadow-lg">
                <div className="flex justify-center mb-6">
                    {[1, 2].map((s) => ( 
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
                    {step === 2 && "Campaign & Collaboration Preferences"}
                </h1>

                <div className="space-y-6">
                    {step === 1 && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="brandName" className="block text-sm font-medium text-gray-300 mb-1">Brand Name <span className="text-red-500">*</span></label>
                                    <input type="text" id="brandName" name="brandName" value={formData.brandName} onChange={handleChange} placeholder="Brand Name" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" required />
                                </div>
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">Company/Business Name <span className="text-red-500">*</span></label>
                                    <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company/Business Name" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" required/>
                                </div>
                                 <div>
                                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-1">Business Type <span className="text-red-500">*</span></label>
                                    <select id="businessType" name="businessType" value={formData.businessType} onChange={handleChange} className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" required>
                                        <option value="">Select...</option>
                                        <option value="startup">Startup</option>
                                        <option value="local_business">Local Business</option>
                                        <option value="e_commerce">E-commerce</option>
                                        <option value="restaurant">Restaurant</option>
                                        <option value="event_organizer">Event Organizer</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="websiteURL" className="block text-sm font-medium text-gray-300 mb-1">Website URL</label>
                                    <input type="url" id="websiteURL" name="websiteURL" value={formData.websiteURL} onChange={handleChange} placeholder="https://www.example.com" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" />
                                </div>
                                <div>
                                    <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-300 mb-1">Business Email <span className="text-red-500">*</span></label>
                                    <input type="email" id="businessEmail" name="businessEmail" value={formData.businessEmail} onChange={handleChange} placeholder="Business Email" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" required />
                                </div>
                                <div>
                                     <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-1">Phone Number <span className="text-red-500">*</span></label>
                                    <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" required />
                                </div>
                                <div>
                                   <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">City & Location <span className="text-red-500">*</span></label>
                                    <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="City, Country" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" required/>
                                </div>
                               
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                           
                           
                            </div>

                           

                        </>
                    )}

                    {step === 2 && (
                        <>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                                <label htmlFor="instagram" className="block text-sm font-medium text-gray-300 mb-1">Instagram <span className="text-red-500">*</span></label>
                                <input type="url" id="instagram" name="socialMediaLinks.instagram" value={formData.socialMediaLinks.instagram || ""} onChange={handleChange} placeholder="Instagram URL" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" required/>
                            </div>
                             <div>
                                <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-300 mb-1">Target Audience</label>
                                <input type="text" id="targetAudience" name="targetAudience" value={formData.targetAudience} onChange={handleChange} placeholder="e.g., Age group, location, interests" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" />
                            </div>

                            <div>
                                <label htmlFor="preferredInfluencerType" className="block text-sm font-medium text-gray-300 mb-1">Preferred Influencer Type</label>
                                <input type="text" id="preferredInfluencerType" name="preferredInfluencerType" value={formData.preferredInfluencerType} onChange={handleChange} placeholder="Micro-influencers, Niche influencers, etc." className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" />
                            </div>
                            <div>
                                 <label htmlFor="campaignBudgetRange" className="block text-sm font-medium text-gray-300 mb-1">Campaign Budget Range</label>
                                <input type="text" id="campaignBudgetRange" name="campaignBudgetRange" value={formData.campaignBudgetRange} onChange={handleChange} placeholder="e.g., $500 - $1000" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" />
                            </div>
                             
                            

                            
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Content Formats</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {["Reels", "Stories", "Static Posts", "Giveaways", "Blog Reviews"].map((format) => (
                                        <label key={format} className="flex items-center text-white">
                                            <input type="checkbox" name="preferredContentFormats" value={format} checked={formData.preferredContentFormats.includes(format)} onChange={handleChange} className="mr-2 text-purple-500 focus:ring-purple-500 h-4 w-4" />
                                            {format}
                                        </label>
                                    ))}
                                </div>
                              </div>
                              
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Campaign Goals</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {["Brand Awareness", "Sales", "Event Promotion", "Engagement"].map((goal) => (
                                        <label key={goal} className="flex items-center text-white">
                                            <input type="checkbox" name="campaignGoals" value={goal} checked={formData.campaignGoals.includes(goal)} onChange={handleChange} className="mr-2 text-purple-500 focus:ring-purple-500 h-4 w-4" />
                                            {goal}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div>
                                    <label htmlFor="pastCollaborations" className="block text-sm font-medium text-gray-300 mb-1">Have you worked with influencers before?</label>
                                    <select id="pastCollaborations" name="pastCollaborations" value={formData.pastCollaborations} onChange={handleChange} className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500">
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                </div>
                                {formData.pastCollaborations && (
                                    <div>
                                       <label htmlFor="pastCollaborationExamples" className="block text-sm font-medium text-gray-300 mb-1">Past Collaboration Examples (Optional)</label>
                                        <textarea id="pastCollaborationExamples" name="pastCollaborationExamples" value={formData.pastCollaborationExamples} onChange={handleChange} placeholder="Links or descriptions" rows="3" className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500" />
                                    </div>
                                )}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                 <label htmlFor="businessVerification" className="block text-sm font-medium text-gray-300 mb-1">Business Verification <span className="text-red-500">*</span></label>
                                <input type="file" id="businessVerification" name="businessVerification" onChange={handleFileChange} className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" accept=".pdf,.doc,.docx,image/*" required/>
                                    {formData.businessVerification && (
                                        <p className="text-sm text-gray-400 mt-1">Selected File: {formData.businessVerification.name}</p>
                                    )}
                              </div>
                             <div>
                                 <label className="flex items-center text-white mt-6">
                                        <input type="checkbox" name="termsAgreement" checked={formData.termsAgreement} onChange={handleChange} className="mr-2 text-purple-500 focus:ring-purple-500 h-4 w-4" required />
                                        I agree to the Terms & Conditions
                                    </label>
                              </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="flex justify-between mt-8">
                    {step > 1 && (
                        <button onClick={prevStep} className="px-6 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white transition-colors duration-200">Back</button>
                    )}
                    {step < 2 ? (
                        <button onClick={nextStep} className="px-6 py-2 rounded-lg bg-white hover:bg-gray-200 text-black transition-colors duration-200">Next</button>
                    ) : (
                     <button onClick={handleSubmit} className="px-6 py-2 rounded-lg bg-white hover:bg-gray-200 text-black transition-colors duration-200">Submit</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrandOnboarding;