# GroupDocs.Metadata for Node.js via Java — AGENTS.md

> Instructions for AI agents working with **Node.js via Java** examples in this repository.

GroupDocs.Metadata for Node.js via Java lets applications read, search, edit, and remove metadata — including EXIF, XMP, IPTC, Office properties, PDF info, and ID3 — from **110+** document, image, audio, video, archive, font, CAD, GIS, and ebook formats, without Microsoft Office or Adobe dependencies.

**Supported formats:** **110+** file formats — authoritative table: [https://docs.groupdocs.com/metadata/nodejs-java/supported-document-formats/](https://docs.groupdocs.com/metadata/nodejs-java/supported-document-formats/)

**Human overview:** see [README.md](README.md) in this repository.

## Install

```bash
npm install @groupdocs/groupdocs.metadata
```

**Runtime note:** Node.js via Java requires **Node.js** and a **JVM (J2SE 8+)** on the host. See [system requirements](https://docs.groupdocs.com/metadata/nodejs-java/system-requirements/).

Package page: [https://www.npmjs.com/package/@groupdocs/groupdocs.metadata](https://www.npmjs.com/package/@groupdocs/groupdocs.metadata)

## Resources

| Resource | URL |
|---|---|
| Documentation | [https://docs.groupdocs.com/metadata/nodejs-java/](https://docs.groupdocs.com/metadata/nodejs-java/) |
| API reference | [https://reference.groupdocs.com/metadata/nodejs-java/](https://reference.groupdocs.com/metadata/nodejs-java/) |
| Code examples (this repo) | [https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-Node.js-via-Java](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-Node.js-via-Java) |
| Release notes | [https://releases.groupdocs.com/metadata/nodejs-java/](https://releases.groupdocs.com/metadata/nodejs-java/) |
| Package (npm) | [https://www.npmjs.com/package/@groupdocs/groupdocs.metadata](https://www.npmjs.com/package/@groupdocs/groupdocs.metadata) |
| Free support forum | [https://forum.groupdocs.com/c/metadata/](https://forum.groupdocs.com/c/metadata/) |
| Temporary license | [https://purchase.groupdocs.com/temp-license](https://purchase.groupdocs.com/temp-license) |

## MCP server (optional)

For IDE agents that support MCP, see [https://github.com/groupdocs-metadata/GroupDocs.Metadata.Mcp](https://github.com/groupdocs-metadata/GroupDocs.Metadata.Mcp). This examples repository demonstrates the **on-premise SDK** path.

## License

Apply a GroupDocs license before processing files without evaluation limitations:

```javascript
const groupdocs = require('@groupdocs/groupdocs.metadata');

// Call once at application startup
groupdocs.License.setLicense('path/to/GroupDocs.Metadata.lic');
```

Use a [temporary license](https://purchase.groupdocs.com/temp-license) for local development. Do not commit license files to this repository.

## API entry points

| Surface | Type | Notes |
|---------|------|-------|
| **This SDK** | `groupdocs.metadata.Metadata` (via `@groupdocs/groupdocs.metadata`) | Primary entry |
| **Cloud** | REST / Cloud SDK clients | **Not used in this repo** |
| **MCP** | MCP tools `ReadMetadata`, `RemoveMetadata` | Separate repo — [https://github.com/groupdocs-metadata/GroupDocs.Metadata.Mcp](https://github.com/groupdocs-metadata/GroupDocs.Metadata.Mcp) |

Typical SDK pattern:

```javascript
const groupdocs = require('@groupdocs/groupdocs.metadata');

const metadata = new groupdocs.Metadata('input.pdf');
try {
    // read / edit / sanitize / save
    metadata.save('output.pdf');
} finally {
    metadata.dispose();
}
```

API reference: [https://reference.groupdocs.com/metadata/nodejs-java/](https://reference.groupdocs.com/metadata/nodejs-java/)

## Example projects

<!-- Filled at generation time from repository tree and README headings. -->

Sample folders under `Examples/`:
- `Examples/AdvancedUsage/`
- `Examples/BasicUsage/`

Topics from [README.md](README.md):
- Read, Write, Update & Remove Document Metadata
- Getting Started with GroupDocs.Metadata for Node.js via Java
- Installation
- Run Examples
- Get Document Info
- Add or Update Metadata Properties Satisfying a Predicate

## Commands you can run

From the repository root:

```bash
npm install
node Examples/<sample_script>.js
```

Ensure a JVM is available (`java -version`) before running Node.js via Java samples.

## House rules

1. **Stay on-platform** — generate **Node.js via Java** code only; do not mix C#, Java, Python, and Node.js snippets from other GroupDocs.Metadata platforms unless the user explicitly asks for a comparison.
2. **Use canonical format count** — say **110+** (link to the formats table); never invent `60+`, `70+`, or `50+` counts.
3. **Prefer samples in this repo** — when adding or fixing examples, follow existing folder and naming conventions; reuse bundled sample files under `Examples/` (or equivalent) when present.
4. **License before full runs** — evaluation builds work with limitations until `SetLicense` / `setLicense` is applied; document the license path when adding new entry points.
5. **Link official docs** — API details belong in [https://reference.groupdocs.com/metadata/nodejs-java/](https://reference.groupdocs.com/metadata/nodejs-java/); keep AGENTS.md oriented to repository navigation and safe defaults.
6. **Do not commit secrets** — license files, Cloud client secrets, and API keys stay out of git.

## Do not change

- Do not delete or rewrite bundled sample documents/images used by existing examples.
- Do not change the NuGet / Maven / PyPI / npm package id (`@groupdocs/groupdocs.metadata`) in install instructions.
- Do not replace SDK entry types with Cloud SDK types (`MetadataApi`, etc.).
- Do not add unrelated GroupDocs products (Conversion, Viewer, etc.) unless the sample explicitly requires them.
- Do not remove evaluation/license setup from runnable entry points without an explicit maintainer request.
