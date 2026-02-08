/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: futureplans
 * Interface for FuturePlans
 */
export interface FuturePlans {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  planTitle?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType date */
  targetDate?: Date | string;
  /** @wixFieldType text */
  status?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  planImage?: string;
}


/**
 * Collection ID: homepagecarouselslides
 * Interface for HomepageCarouselSlides
 */
export interface HomepageCarouselSlides {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  slideImage?: string;
  /** @wixFieldType text */
  slideTitle?: string;
  /** @wixFieldType text */
  slideDescription?: string;
  /** @wixFieldType text */
  callToActionText?: string;
  /** @wixFieldType url */
  callToActionUrl?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: jobopenings
 * Interface for JobOpenings
 */
export interface JobOpenings {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  jobTitle?: string;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType text */
  department?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  employmentType?: string;
  /** @wixFieldType date */
  applicationDeadline?: Date | string;
  /** @wixFieldType date */
  datePosted?: Date | string;
}


/**
 * Collection ID: networkservices
 * Interface for NetworkServices
 */
export interface NetworkServices {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  serviceDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
  /** @wixFieldType text */
  keyFeatures?: string;
  /** @wixFieldType text */
  targetAudience?: string;
}


/**
 * Collection ID: projects
 * Interface for Projects
 */
export interface Projects {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  projectName?: string;
  /** @wixFieldType text */
  projectSummary?: string;
  /** @wixFieldType text */
  projectDetails?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  mainImage?: string;
  /** @wixFieldType date */
  startDate?: Date | string;
  /** @wixFieldType text */
  status?: string;
}


/**
 * Collection ID: radiodevices
 * Interface for RadioDevices
 */
export interface RadioDevices {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  deviceName?: string;
  /** @wixFieldType text */
  modelNumber?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  mainImage?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  manufacturer?: string;
  /** @wixFieldType url */
  datasheetUrl?: string;
}
