/* eslint-disable no-unused-vars */
import React, { useEffect, useState ,useMemo} from "react";
import DialysisView from "../../../components/manager_center/dialysis/DialysisView";
import { useParams } from "react-router-dom";
import { DialysisDetailstProvider } from "./DialysisPageState";

export default function DialysisPage() {
  // const { id } = useParams();
  // console.log("from from from ");
  // console.log(id);
  let { id: initialId } = useParams();

  // استخدام useMemo لتخزين القيمة والحفاظ على ثباتها
  const id = useMemo(() => initialId, [initialId]);

  // الآن يمكنك استخدام القيمة المخزنة في الحالة `id` والتي ستظل ثابتة
  console.log("ID is now stable:", id);

  return (
    <>
      {/* //هون كان بس في ال flexgrow  */}

      <DialysisDetailstProvider id={id}>
        <div className="flex-grow -x-auto mr-56 ml-8 h-full mt-12">
          <DialysisView />
        </div>
      </DialysisDetailstProvider>
    </>
  );
}
