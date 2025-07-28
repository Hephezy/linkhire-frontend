"use client";

import React, { useState } from 'react';
import { ActivityTab } from '@/constants';

const StatusTab = () => {

  const [activeTab, setActiveTab] = useState("apply-status");

  const renderTabContent = () => {
    switch (activeTab) {
      case "apply-status":
        return <div></div>;
      case "offered-job":
        return <div></div>;
      case "saved-job":
        return <div></div>;
      case "followed-company":
        return <div></div>;
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex space-x-6 mb-4'>
        {ActivityTab.map((tab) => (
          <div
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`
          text-lg font-medium pb-2 cursor-pointer
          ${activeTab === tab.value
                ? "text-[color:var(--main)] border-b-2 border-[color:var(--main)]"
                : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div>
        {renderTabContent()}
      </div>
    </div>

  );
};

export default StatusTab;