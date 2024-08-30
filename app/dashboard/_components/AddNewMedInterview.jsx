"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";

const AddNewMedInterview = () => {
  const [openDailog, setOpenDialog] = useState(false);
  const [medPosition, setMedPosition] = useState();
  const [medDesc, setMedDesc] = useState();
  const [medYearExperience, setMedYearExperience] = useState();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(medPosition, medDesc, medYearExperience);

    const InputPrompt =
      "Medical Position: " +
      medPosition +
      ", Medical Experience: " +
      medDesc +
      " Years of Experience: " +
      medYearExperience +
      ", Depends on this information please give me "+process.env.NEXT_PUBLIC_MEDICAL_YEAR_EXPERIENCE+" medical question with Answered in Json Format, Give Question and Answered as field in JSON";

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(JSON.parse(MockJsonResp));
    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className=" text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDailog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell Us More About Your Medical Experience
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div className="my-3">
                  <h2>
                    Add Details about your medical position, Medical rol descritpion and
                    years of experience
                  </h2>

                  <div className="mt-7 my-3">
                    <label className="text-black" >Medical Role/Medical Position</label>
                    <Input
                      className="mt-1"
                      placeholder="Ex. Doctor, Nurse, Medical Student"
                      required
                      onChange={(e) => setMedPosition(e.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label className="text-black" >Medical Experience (with specialization)</label>
                    <Textarea
                      className="mt-1"
                      placeholder="Ex. Cardiology, Oncology"
                      required
                      onChange={(e) => setMedDesc(e.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label className="text-black" >Years of Experience</label>
                    <Input
                      className="mt-1 "
                      placeholder="Ex. 5"
                      max="50"
                      type="number"
                      required
                      onChange={(e) => setMedYearExperience(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="goast"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" />
                        Generating From AI
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewMedInterview;

