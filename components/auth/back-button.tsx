"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BackButtonsProps {
  href: string;
  label: string;
}

export const BackButton = ({ label, href }: BackButtonsProps) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
