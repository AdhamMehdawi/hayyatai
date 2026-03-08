import { useState, useEffect } from 'react';

// Types matching the JSON structure
interface Symptom {
	name_en: string;
	name_ar: string;
}

interface RiskFactor {
	text_en: string;
	text_ar: string;
}

interface Treatment {
	text_en: string;
	text_ar: string;
}

interface WhenToDoctor {
	text_en: string;
	text_ar: string;
}

interface Condition {
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

interface ConditionListItem {
	id: number;
	slug: string;
	title_en: string;
	title_ar: string;
	description_en: string;
	description_ar: string;
	prevalence_stat: string;
}

interface SymptomItem {
	id: number;
	slug: string;
	name_en: string;
	name_ar: string;
}

interface HealthStat {
	id: number;
	key: string;
	value: string;
	label_en: string;
	label_ar: string;
	description_en: string;
	description_ar: string;
}

interface APIResponse<T> {
	success: boolean;
	data?: T;
	error?: string;
}

// API base URL - will use relative path in production
const API_BASE = '/api/health';

// Hook to fetch all conditions
export function useConditions() {
	const [conditions, setConditions] = useState<ConditionListItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchConditions() {
			try {
				setLoading(true);
				const response = await fetch(`${API_BASE}/conditions`);
				const data: APIResponse<ConditionListItem[]> = await response.json();

				if (data.success && data.data) {
					setConditions(data.data);
				} else {
					setError(data.error || 'Failed to fetch conditions');
				}
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error');
			} finally {
				setLoading(false);
			}
		}

		fetchConditions();
	}, []);

	return { conditions, loading, error };
}

// Hook to fetch a single condition by slug
export function useCondition(slug: string | null) {
	const [condition, setCondition] = useState<Condition | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!slug) {
			setLoading(false);
			return;
		}

		async function fetchCondition() {
			try {
				setLoading(true);
				const response = await fetch(`${API_BASE}/conditions/${slug}`);
				const data: APIResponse<Condition> = await response.json();

				if (data.success && data.data) {
					setCondition(data.data);
				} else {
					setError(data.error || 'Failed to fetch condition');
				}
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error');
			} finally {
				setLoading(false);
			}
		}

		fetchCondition();
	}, [slug]);

	return { condition, loading, error };
}

// Hook to fetch all symptoms
export function useSymptoms() {
	const [symptoms, setSymptoms] = useState<SymptomItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchSymptoms() {
			try {
				setLoading(true);
				const response = await fetch(`${API_BASE}/symptoms`);
				const data: APIResponse<SymptomItem[]> = await response.json();

				if (data.success && data.data) {
					setSymptoms(data.data);
				} else {
					setError(data.error || 'Failed to fetch symptoms');
				}
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error');
			} finally {
				setLoading(false);
			}
		}

		fetchSymptoms();
	}, []);

	return { symptoms, loading, error };
}

// Hook to fetch health statistics
export function useHealthStats() {
	const [stats, setStats] = useState<HealthStat[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchStats() {
			try {
				setLoading(true);
				const response = await fetch(`${API_BASE}/stats`);
				const data: APIResponse<HealthStat[]> = await response.json();

				if (data.success && data.data) {
					setStats(data.data);
				} else {
					setError(data.error || 'Failed to fetch stats');
				}
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error');
			} finally {
				setLoading(false);
			}
		}

		fetchStats();
	}, []);

	return { stats, loading, error };
}
