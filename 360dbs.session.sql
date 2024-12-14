-- Businesses
CREATE TABLE businesses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    year_start INT,
    year_end INT,
    vision TEXT,
    mission TEXT,
    slogan TEXT,
    has_paid BOOLEAN DEFAULT FALSE,
    logo TEXT
);

-- Core Values
CREATE TABLE core_values (
    id SERIAL PRIMARY KEY,
    business_id INT REFERENCES businesses(id),
    core_value VARCHAR(255),
    description TEXT
);

-- Tasks and SWOT Analysis
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    business_id INT REFERENCES businesses(id),
    swot_tag VARCHAR(50),
    stakeholder TEXT,
    focus_area TEXT,
    risk_factor TEXT
);

CREATE TABLE swot (
    id SERIAL PRIMARY KEY,
    business_id INT REFERENCES businesses(id),
    swot_tag VARCHAR(50),
    pestel_tag VARCHAR(50),
    swot_point TEXT,
    importance_to_us INT,
    importance_to_industry INT,
    impact TEXT
);

-- Stakeholders
CREATE TABLE stakeholders (
    id SERIAL PRIMARY KEY,
    business_id INT REFERENCES businesses(id),
    stakeholder_name VARCHAR(255),
    ranking INT
);

CREATE TABLE stakeholder_expectations (
    id SERIAL PRIMARY KEY,
    stakeholder_id INT REFERENCES stakeholders(id),
    stakeholder_expectations TEXT,
    our_expectations TEXT
);

-- Staff and Groups
CREATE TABLE staff_groups (
    id SERIAL PRIMARY KEY,
    business_id INT REFERENCES businesses(id),
    task_id INT REFERENCES tasks(id),
    task_detail TEXT,
    num_members INT
);

CREATE TABLE staff (
    id SERIAL PRIMARY KEY,
    group_id INT REFERENCES staff_groups(id),
    business_id INT REFERENCES businesses(id),
    company_email VARCHAR(255),
    password VARCHAR(255),
    name VARCHAR(255),
    surname VARCHAR(255),
    job_title VARCHAR(255)
);

-- Focus Areas and Objectives
CREATE TABLE focus_areas (
    id SERIAL PRIMARY KEY,
    business_id INT REFERENCES businesses(id),
    key_area TEXT,
    description TEXT,
    is_done BOOLEAN DEFAULT FALSE
);

CREATE TABLE objectives (
    id SERIAL PRIMARY KEY,
    focus_area_id INT REFERENCES focus_areas(id),
    objective TEXT,
    is_done BOOLEAN DEFAULT FALSE
);

CREATE TABLE kpis (
    id SERIAL PRIMARY KEY,
    focus_matrix_id INT,
    kpi_name VARCHAR(255),
    is_done BOOLEAN DEFAULT FALSE
);

CREATE TABLE outcomes (
    id SERIAL PRIMARY KEY,
    focus_matrix_id INT,
    outcome TEXT,
    is_done BOOLEAN DEFAULT FALSE
);

-- Risks and Risk Factors
CREATE TABLE risks (
    id SERIAL PRIMARY KEY,
    business_id INT REFERENCES businesses(id),
    focus_matrix_id INT,
    risk_factor_id INT,
    probability INT,
    impact INT,
    rating TEXT,
    mitigation TEXT
);

CREATE TABLE risk_factors (
    id SERIAL PRIMARY KEY,
    focus_matrix_id INT,
    factor TEXT
);

-- Focus Matrix and Related Items
CREATE TABLE focus_matrix (
    id SERIAL PRIMARY KEY,
    action TEXT,
    objective_id INT REFERENCES objectives(id),
    kpi_id INT REFERENCES kpis(id),
    outcome_id INT REFERENCES outcomes(id),
    responsibility TEXT,
    total_cost DECIMAL(10, 2),
    start DATE,
    projected_end DATE,
    actual_end DATE,
    is_done BOOLEAN DEFAULT FALSE
);