# Health Library API - Static JSON Implementation

## Overview

The health library uses a simple, lightweight JSON-based approach. All data is stored in a single JSON file and served via API endpoints.

## Data Structure

**Location**: `/src/worker/data/health-data.json`

The JSON file contains:
- **conditions**: PCOS and Endometriosis with complete details (symptoms, risk factors, treatments, when to see doctor)
- **symptoms**: 12 common symptoms (painful periods, heavy bleeding, etc.)
- **health_stats**: 3 key statistics (PCOS prevalence, pain dismissed, diagnosis delay)

## API Endpoints

All endpoints return responses in this format:
```json
{
  "success": true,
  "data": [...]
}
```

### Available Endpoints

1. **GET /api/health/conditions**
   - Returns list of all conditions (summary only)
   - Response: `{ success: true, data: ConditionListItem[] }`

2. **GET /api/health/conditions/:slug**
   - Returns complete details for a condition
   - Slugs: `pcos`, `endometriosis`
   - Response: `{ success: true, data: Condition }`

3. **GET /api/health/symptoms**
   - Returns list of all symptoms
   - Response: `{ success: true, data: SymptomItem[] }`

4. **GET /api/health/stats**
   - Returns health statistics
   - Response: `{ success: true, data: HealthStat[] }`

## React Hooks

Pre-built hooks are available in `/src/react-app/hooks/useHealthAPI.ts`:

```typescript
import { useConditions, useCondition, useSymptoms, useHealthStats } from '../hooks/useHealthAPI';

// Fetch all conditions
const { conditions, loading, error } = useConditions();

// Fetch single condition
const { condition, loading, error } = useCondition('pcos');

// Fetch symptoms
const { symptoms, loading, error } = useSymptoms();

// Fetch stats
const { stats, loading, error } = useHealthStats();
```

## Usage Examples

See `/USAGE_EXAMPLE.md` for detailed React component examples.

## Development

### Run locally
```bash
npm run dev
```

API available at: `http://localhost:5173/api/health/`

### Build
```bash
npm run build
```

### Deploy
```bash
npm run deploy
```

## Adding New Conditions

To add a new health condition:

1. Open `/src/worker/data/health-data.json`
2. Add a new object to the `conditions` array:

```json
{
  "id": 3,
  "slug": "new-condition",
  "title_en": "Condition Name",
  "title_ar": "اسم الحالة",
  "description_en": "Description...",
  "description_ar": "الوصف...",
  "prevalence_stat": "1 in 10",
  "symptoms": [...],
  "risk_factors": [...],
  "treatments": [...],
  "when_to_doctor": [...]
}
```

3. Save and rebuild: `npm run build`

## File Structure

```
src/
├── worker/
│   ├── data/
│   │   └── health-data.json          # Health data source
│   ├── routes/
│   │   └── health.ts                 # API endpoints
│   ├── types/
│   │   └── database.ts               # TypeScript types
│   └── index.ts                      # Worker entry point
└── react-app/
    └── hooks/
        └── useHealthAPI.ts           # React hooks for data fetching
```

## Benefits of This Approach

1. **Simple**: No database setup or migrations needed
2. **Fast**: Data is bundled with the worker, no external queries
3. **Type-safe**: Full TypeScript support
4. **Easy to edit**: Just edit the JSON file
5. **Version controlled**: Data changes tracked in git
6. **Zero latency**: No database round trips

## Future Enhancements

When ready to scale:
- Move to Cloudflare D1 database for dynamic data
- Add user symptom tracking
- Implement assessment/screening logic
- Add admin panel for content management

For now, the static JSON approach is perfect for the initial launch and content iteration.
