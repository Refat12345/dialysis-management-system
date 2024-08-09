/* eslint-disable no-unused-vars */
import React, { useEffect, useState ,useMemo} from "react";
import DialysisView from "../../../components/manager_center/dialysis/DialysisView";
import { useParams } from "react-router-dom";
import { DialysisDetailstProvider } from "./DialysisPageState";

export default function DialysisPage() {
  
  let { id: initialId } = useParams();

  const id = useMemo(() => initialId, [initialId]);


  return (
    <>

      <DialysisDetailstProvider id={id}>
        <div className="flex-grow -x-auto mr-56 ml-8 h-full mt-12">
          <DialysisView />
        </div>
      </DialysisDetailstProvider>
    </>
  );
}
