import { Hono } from "hono";
import healthData from "../data/health-data.json";

const health = new Hono();

// GET /api/health/conditions - List all conditions
health.get("/conditions", (c) => {
	try {
		const conditions = healthData.conditions.map((condition) => ({
			id: condition.id,
			slug: condition.slug,
			title_en: condition.title_en,
			title_ar: condition.title_ar,
			description_en: condition.description_en,
			description_ar: condition.description_ar,
			prevalence_stat_en: condition.prevalence_stat_en,
			prevalence_stat_ar: condition.prevalence_stat_ar,
		}));

		return c.json({
			success: true,
			data: conditions,
		});
	} catch (error) {
		console.error("Error fetching conditions:", error);
		return c.json(
			{
				success: false,
				error: "Failed to fetch conditions",
			},
			500
		);
	}
});

// GET /api/health/conditions/:slug - Get condition details
health.get("/conditions/:slug", (c) => {
	try {
		const slug = c.req.param("slug");
		const condition = healthData.conditions.find((c) => c.slug === slug);

		if (!condition) {
			return c.json(
				{
					success: false,
					error: "Condition not found",
				},
				404
			);
		}

		return c.json({
			success: true,
			data: condition,
		});
	} catch (error) {
		console.error("Error fetching condition details:", error);
		return c.json(
			{
				success: false,
				error: "Failed to fetch condition details",
			},
			500
		);
	}
});

// GET /api/health/symptoms - List all symptoms
health.get("/symptoms", (c) => {
	try {
		return c.json({
			success: true,
			data: healthData.symptoms,
		});
	} catch (error) {
		console.error("Error fetching symptoms:", error);
		return c.json(
			{
				success: false,
				error: "Failed to fetch symptoms",
			},
			500
		);
	}
});

// GET /api/health/stats - Get health statistics
health.get("/stats", (c) => {
	try {
		return c.json({
			success: true,
			data: healthData.health_stats,
		});
	} catch (error) {
		console.error("Error fetching health stats:", error);
		return c.json(
			{
				success: false,
				error: "Failed to fetch health stats",
			},
			500
		);
	}
});

export default health;
