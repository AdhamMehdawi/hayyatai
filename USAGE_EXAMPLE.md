# Health API Usage Examples

## Overview

The Hayyat health library uses a simple JSON-based API. All health condition data is stored in `/src/worker/data/health-data.json` and served via API endpoints.



## React Hook Examples

### Example 1: Display All Conditions

```tsx
import { useConditions } from '../hooks/useHealthAPI';
import { useTranslation } from 'react-i18next';

function ConditionsList() {
  const { conditions, loading, error } = useConditions();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Health Conditions</h2>
      {conditions.map((condition) => (
        <div key={condition.id}>
          <h3>{isArabic ? condition.title_ar : condition.title_en}</h3>
          <p>{isArabic ? condition.description_ar : condition.description_en}</p>
          {condition.prevalence_stat && (
            <span>Prevalence: {condition.prevalence_stat}</span>
          )}
        </div>
      ))}
    </div>
  );
}
```

### Example 2: Display Single Condition with Details

```tsx
import { useCondition } from '../hooks/useHealthAPI';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ConditionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { condition, loading, error } = useCondition(slug);
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!condition) return <div>Condition not found</div>;

  return (
    <div>
      <h1>{isArabic ? condition.title_ar : condition.title_en}</h1>
      <p>{isArabic ? condition.description_ar : condition.description_en}</p>

      <section>
        <h2>Symptoms</h2>
        <ul>
          {condition.symptoms.map((symptom) => (
            <li key={symptom.id}>
              {isArabic ? symptom.name_ar : symptom.name_en}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Risk Factors</h2>
        <ul>
          {condition.risk_factors.map((factor) => (
            <li key={factor.id}>
              {isArabic ? factor.text_ar : factor.text_en}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Treatment Options</h2>
        <ul>
          {condition.treatments.map((treatment) => (
            <li key={treatment.id}>
              {isArabic ? treatment.text_ar : treatment.text_en}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>When to See a Doctor</h2>
        <ul>
          {condition.when_to_doctor.map((item) => (
            <li key={item.id}>
              {isArabic ? item.text_ar : item.text_en}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
```

### Example 3: Display Health Statistics

```tsx
import { useHealthStats } from '../hooks/useHealthAPI';
import { useTranslation } from 'react-i18next';

function HealthStatsSection() {
  const { stats, loading, error } = useHealthStats();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div key={stat.id} className="stat-card">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">
            {isArabic ? stat.label_ar : stat.label_en}
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Example 4: Symptom Checker

```tsx
import { useSymptoms } from '../hooks/useHealthAPI';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SymptomChecker() {
  const { symptoms, loading, error } = useSymptoms();
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const toggleSymptom = (symptomId: number) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Select Your Symptoms</h2>
      <div className="symptom-grid">
        {symptoms.map((symptom) => (
          <button
            key={symptom.id}
            onClick={() => toggleSymptom(symptom.id)}
            className={selectedSymptoms.includes(symptom.id) ? 'selected' : ''}
          >
            {isArabic ? symptom.name_ar : symptom.name_en}
          </button>
        ))}
      </div>
      <div>
        Selected: {selectedSymptoms.length} symptoms
      </div>
    </div>
  );
}
```

## Direct API Calls (without hooks)

### Fetch All Conditions

```typescript
async function fetchConditions() {
  const response = await fetch('/api/health/conditions');
  const data = await response.json();

  if (data.success) {
    console.log(data.data); // Array of conditions
  }
}
```

### Fetch Single Condition

```typescript
async function fetchPCOS() {
  const response = await fetch('/api/health/conditions/pcos');
  const data = await response.json();

  if (data.success) {
    console.log(data.data); // Condition with all details
  }
}
```

### Fetch Symptoms

```typescript
async function fetchSymptoms() {
  const response = await fetch('/api/health/symptoms');
  const data = await response.json();

  if (data.success) {
    console.log(data.data); // Array of symptoms
  }
}
```

### Fetch Health Stats

```typescript
async function fetchStats() {
  const response = await fetch('/api/health/stats');
  const data = await response.json();

  if (data.success) {
    console.log(data.data); // Array of health statistics
  }
}
```

## API Response Format

All API endpoints return responses in this format:

```typescript
{
  "success": boolean,
  "data"?: T,      // Present on success
  "error"?: string // Present on failure
}
```

### Example Success Response

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "slug": "pcos",
      "title_en": "Polycystic Ovary Syndrome (PCOS)",
      "title_ar": "متلازمة تكيّس المبايض",
      "description_en": "...",
      "description_ar": "...",
      "prevalence_stat": "1 in 5 Gulf women"
    }
  ]
}
```

### Example Error Response

```json
{
  "success": false,
  "error": "Condition not found"
}
```

## Next Steps

1. Replace static JSON i18n data with API calls
2. Add caching layer for better performance
3. Add loading states and error boundaries
4. Create user symptom tracking endpoints
5. Add assessment/screening logic
