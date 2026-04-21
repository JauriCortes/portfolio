# Personal Portfolio

Full-stack portfolio site built with React and Django, deployed on Google Cloud Platform.

Live: [http://35.192.119.171](http://35.192.119.171)

## Tech Stack

**Frontend**
- React 19 + TypeScript
- Vite
- CSS custom properties (light/dark theme)

**Backend**
- Django 6 + Django REST Framework
- SQLite
- Gunicorn (WSGI server)

**Infrastructure**
- Google Cloud Platform — Compute Engine (e2-micro)
- nginx as reverse proxy
- systemd for process management

## Architecture

```
Browser → nginx → React (static, /dist)
               → Django API (/author, /projects, /about)
```

The frontend is a static build served directly by nginx. The Django backend exposes a JSON REST API consumed by the React app. Both run on the same GCP VM — nginx routes API paths to Gunicorn over a Unix socket.

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/author/` | Author info, bio, contact |
| GET | `/projects/` | Projects list with technologies |
| GET | `/about/` | About section content |

## Database

SQLite managed through Django ORM. Content (author info, projects, technologies) is administered via Django's built-in admin panel at `/admin`.

Models:
- `Author` — name, picture, bio, social links
- `Project` — name, description, image, GitHub/demo links, M2M to `Technology`
- `Technology` — tag name (e.g. React, Python)
- `About` — markdown content

