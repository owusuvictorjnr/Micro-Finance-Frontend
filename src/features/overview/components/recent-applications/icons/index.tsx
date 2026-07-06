import React from "react";
import { Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

export const PendingIcon = () => <Clock className="h-3.5 w-3.5 shrink-0" />;
export const ApprovedIcon = () => <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />;
export const RejectedIcon = () => <XCircle className="h-3.5 w-3.5 shrink-0" />;
export const UnderReviewIcon = () => <AlertCircle className="h-3.5 w-3.5 shrink-0" />;
