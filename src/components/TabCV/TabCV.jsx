import { useState } from "react";
import { Keyword_empty, LinkedIn, Linkedin_in, Linkedin_in_white, PFS_CV_Empty } from "../../data/icons";
import "./tabcv.css";
import { Icon, MinimalButton, Position, Tooltip} from '@react-pdf-viewer/core';
import { NextIcon, PreviousIcon} from '@react-pdf-viewer/search';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';

const TabCV = ({Search,buttons}) => {


  const [selectedTab, setSelectedTab] = useState("CV 1");

  const handleTabClick = tabName => {
    setSelectedTab(tabName);
  };
  return (
    <div className="tabCv-wrapper">
      <div className="tabCv-left">
        <span onClick={() => handleTabClick("CV 1")} className={selectedTab === "CV 1" ? "selected" : ""}>
          CV 1
        </span>
        <span onClick={() => handleTabClick("CV 2")} className={selectedTab === "CV 2" ? "selected" : ""}>
          CV 2
        </span>
        <span onClick={() => handleTabClick("linkedIn")} className={selectedTab === "linkedIn" ? "selected" : ""}>
          <img width={25} src={selectedTab === "linkedIn" ? Linkedin_in_white : Linkedin_in} alt="" />
        </span>
        <span onClick={() => handleTabClick("PFS")} className={selectedTab === "PFS" ? "selected" : ""}>
          PFS
        </span>
      </div>
      <div className="tabCv-right">
        <Search>
                {(renderSearchProps) => {
                    return (
                        <>
                              <img width={25} src={Keyword_empty} alt="" />
                            <div
                            >
                                <input
                                    style={{
                                        border: 'none',
                                        width:"70%"
                                    }}
                                    placeholder="Enter to search"
                                    type="text"
                                    value={renderSearchProps.keyword}
                                    onChange={(e) => {
                                        renderSearchProps.setKeyword(e.target.value);
                                    }}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter") {
                                          renderSearchProps.search().then(() => {
                                              renderSearchProps.jumpToNextMatch();
                                          });
                                      }
                                  }}
                                />

                            </div>
                            {(
                                        <div style={{fontSize:12}}>
                                            {renderSearchProps.currentMatch} of {renderSearchProps.numberOfMatches}
                                        </div>
                                    )}
                            <div style={{ padding: '0 2px' }}>
                                <Tooltip
                                    position={Position.BottomCenter}
                                    target={
                                        <MinimalButton onClick={renderSearchProps.jumpToPreviousMatch}>
                                            <PreviousIcon />
                                        </MinimalButton>
                                    }
                                    content={() => 'Previous match'}
                                    offset={{ left: 0, top: 8 }}
                                />
                            </div>
                            <div style={{ padding: '0 2px' }}>
                                <Tooltip
                                    position={Position.BottomCenter}
                                    target={
                                        <MinimalButton onClick={renderSearchProps.jumpToNextMatch}>
                                            <NextIcon />
                                        </MinimalButton>
                                    }
                                    content={() => 'Next match'}
                                    offset={{ left: 0, top: 8 }}
                                />
                            </div>
                        </>
                    );
                }}
            </Search>
      </div>
    </div>
  );
};

export default TabCV;
