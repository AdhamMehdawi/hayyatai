// Health data types
export interface Symptom {
	name_en: string;
	name_ar: string;
}

export interface RiskFactor {
	text_en: string;
	text_ar: string;
}

export interface Treatment {
	text_en: string;
	text_ar: string;
}

export interface WhenToDoctor {
	text_en: string;
	text_ar: string;
}

export interface Condition {
	id: number;
	slug: string;
	title_en: string;
	title_ar: string;
	description_en: string;
	description_ar: string;
	prevalence_stat: string;
	symptoms: Symptom[];
	risk_factors: RiskFactor[];
	treatments: Treatment[];
	when_to_doctor: WhenToDoctor[];
}

export interface SymptomItem {
	id: number;
	slug: string;
	name_en: string;
	name_ar: string;
}

export interface HealthStat {
	id: number;
	key: string;
	value: string;
	label_en: string;
	label_ar: string;
	description_en: string;
	description_ar: string;
}

export interface ConditionListItem {
	id: number;
	slug: string;
	title_en: string;
	title_ar: string;
	description_en: string;
	description_ar: string;
	prevalence_stat: string;
}

// API response types
export interface APIResponse<T> {
	success: boolean;
	data?: T;
	error?: string;
}
