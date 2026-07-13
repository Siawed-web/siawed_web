import React from "react";
import styles from "./reports.module.scss";
import SectionWrapper from "@/components/ui/section_wrapper/section_wrapper";
import { FONTS } from "@/styles/fonts";
import { FileEarmarkPdfFill, Download } from "react-bootstrap-icons";

const ReportsSection = () => {
  const reportsList = [
    {
      title: "Annual Report 2023-2024",
      size: "4.2 MB",
      date: "April 2024",
      url: "#"
    },
    {
      title: "Impact Assessment Report 2023",
      size: "2.8 MB",
      date: "January 2024",
      url: "#"
    },
    {
      title: "Annual Report 2022-2023",
      size: "3.9 MB",
      date: "April 2023",
      url: "#"
    },
    {
      title: "WENBA Program Summary 2022",
      size: "1.5 MB",
      date: "December 2022",
      url: "#"
    }
  ];

  return (
    <div id="reports" className={styles.reportsContainer}>
      <SectionWrapper bgColor="white" aos="fade-up">
        <div className={styles.header}>
          <p className="eyebrow eyebrow-blue">Transparency</p>
          <h2 className={`section-heading ${FONTS.font2}`}>
            Annual <em className="em-blue">Reports</em>
          </h2>
          <p className="lead">
            We are committed to financial transparency and governance. Explore our annual reports and impact assessments below.
          </p>
        </div>

        <div className={styles.list}>
          {reportsList.map((report, index) => (
            <a key={index} href={report.url} className={styles.item} data-aos="fade-up" data-aos-delay={index * 50}>
              <div className={styles.iconWrapper}>
                <FileEarmarkPdfFill />
              </div>
              <div className={styles.content}>
                <h3 className={`${styles.title} ${FONTS.font2}`}>{report.title}</h3>
                <div className={styles.meta}>
                  <span className={styles.date}>{report.date}</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.size}>{report.size}</span>
                </div>
              </div>
              <div className={styles.downloadBtn}>
                <Download />
                <span>Download</span>
              </div>
            </a>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ReportsSection;
