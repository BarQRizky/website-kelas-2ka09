import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

/**
 * ============================================================
 *  MemberSearchServer.java — Kelas 2KA09
 *  Universitas Gunadarma | Sistem Informasi | FIKTI
 * ============================================================
 *  Server backend sederhana yang menyediakan REST API untuk
 *  fitur pencarian anggota kelas di website 2KA09.
 *
 *  Cara menjalankan:
 *    javac MemberSearchServer.java
 *    java  MemberSearchServer
 *
 *  Endpoint yang tersedia:
 *    GET /api/members          → Semua data anggota (JSON)
 *    GET /api/search?q=<kata>  → Cari anggota by nama / NPM
 *    GET /                     → Halaman info server
 * ============================================================
 */
public class MemberSearchServer {

    // ─── Konfigurasi ──────────────────────────────────────────
    private static final int    PORT    = 8080;
    private static final String ORIGIN  = "*";   // izinkan semua origin (CORS)

    // ─── Data Anggota 2KA09 ───────────────────────────────────
    // Format: { id, nama, npm }
    private static final String[][] MEMBERS = {
        { "1",  "ADITYA ANANDA PUTRI",              "11124445" },
        { "2",  "AHMAD HANIF FAUZAAN",               "10124064" },
        { "3",  "ANDHITO YUDI PRATAMA",              "10124146" },
        { "4",  "ARIF PRIAMBODO",                    "10124191" },
        { "5",  "BAYU ARDIAN LISTIANTO",             "10124245" },
        { "6",  "DARWIN",                             "10124309" },
        { "7",  "EFRON KALEBY KUDAHATI",             "10124382" },
        { "8",  "EGI PRIANGGARA",                    "10124383" },
        { "9",  "FAISAL ARIFIN",                     "10124422" },
        { "10", "FIRA RAIDAH RAIHANA",               "10124495" },
        { "11", "HAFIZH RIDHA",                      "10124539" },
        { "12", "ILHAM KHAIRI",                      "10124587" },
        { "13", "KASA JULYANO CESAREA",              "10124640" },
        { "14", "KENZIE ABISAKHA YUDA",              "10124647" },
        { "15", "KRESNA BAYU KUSNANTO",              "10124666" },
        { "16", "LAZZUARD FARREL RAYNDRA",           "10124673" },
        { "17", "LINGGA SASI RAMADHAN",              "11124452" },
        { "18", "MEGIE PUTRI NABILAH",               "10124719" },
        { "19", "MUAMMAR KHOIRO MAAMUL LUBIS",       "10124752" },
        { "20", "MUHAMAD IRFAN DZAKKI",              "10124771" },
        { "21", "MUHAMAD RIZKY",                     "10124783" },
        { "22", "MUHAMMAD AFFAN AL A DZAMI",         "10124792" },
        { "23", "MUHAMMAD FARRELL AL FATAH",         "10124850" },
        { "24", "MUHAMMAD FATHAN MUBINA",            "10124852" },
        { "25", "MUHAMMAD REVA PRAKOSO",             "10124951" },
        { "26", "MUHAMMAD RIDHWAN AR RAYYAN",        "10124954" },
        { "27", "MUHAMMAD WILDAN AN-NAUFAL",         "11124478" },
        { "28", "RAFAEL RAMADHAN",                   "11124113" },
        { "29", "RASYA ADITYA FADHILAH",             "11124176" },
        { "30", "RIQY ZOEHDAN SHIDDIQY",             "11124236" },
        { "31", "RIZKIYA ANANDA PUTRI",              "11124242" },
        { "32", "SAVINA RACHMA PUTRI",               "11124292" },
        { "33", "YOHANES SEBASTIAN PRASETIYO",       "11124386" },
    };

    // ─── Entry Point ──────────────────────────────────────────
    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);

        // Daftarkan semua endpoint
        server.createContext("/api/search",  MemberSearchServer::handleSearch);
        server.createContext("/api/members", MemberSearchServer::handleAllMembers);
        server.createContext("/",            MemberSearchServer::handleRoot);

        server.start();
        printBanner();
    }

    // ─── Handler: GET /api/search?q=<query> ───────────────────
    private static void handleSearch(HttpExchange exchange) throws IOException {
        if (!isGet(exchange)) {
            sendJson(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            return;
        }

        String keyword = parseQueryParam(exchange, "q").toLowerCase();

        List<String[]> results = new ArrayList<>();
        if (!keyword.isEmpty()) {
            for (String[] m : MEMBERS) {
                boolean matchName = m[1].toLowerCase().contains(keyword);
                boolean matchNpm  = m[2].contains(keyword);
                if (matchName || matchNpm) {
                    results.add(m);
                }
            }
        }

        // Bangun respons JSON
        StringBuilder sb = new StringBuilder();
        sb.append("{")
          .append("\"query\":\"").append(escapeJson(keyword)).append("\",")
          .append("\"count\":").append(results.size()).append(",")
          .append("\"results\":[");

        for (int i = 0; i < results.size(); i++) {
            if (i > 0) sb.append(",");
            sb.append(memberToJson(results.get(i)));
        }
        sb.append("]}");

        logRequest("SEARCH", "q=" + keyword + "  →  " + results.size() + " hasil");
        sendJson(exchange, 200, sb.toString());
    }

    // ─── Handler: GET /api/members ────────────────────────────
    private static void handleAllMembers(HttpExchange exchange) throws IOException {
        if (!isGet(exchange)) {
            sendJson(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            return;
        }

        StringBuilder sb = new StringBuilder();
        sb.append("{\"count\":").append(MEMBERS.length).append(",\"members\":[");

        for (int i = 0; i < MEMBERS.length; i++) {
            if (i > 0) sb.append(",");
            sb.append(memberToJson(MEMBERS[i]));
        }
        sb.append("]}");

        logRequest("ALL MEMBERS", MEMBERS.length + " anggota");
        sendJson(exchange, 200, sb.toString());
    }

    // ─── Handler: GET / (halaman info) ────────────────────────
    private static void handleRoot(HttpExchange exchange) throws IOException {
        String html =
            "<!DOCTYPE html><html lang='id'>" +
            "<head><meta charset='UTF-8'>" +
            "<title>MemberSearch API — 2KA09</title>" +
            "<style>" +
            "  body{font-family:Inter,sans-serif;background:#0d0d14;color:#f0f0f8;padding:48px;max-width:600px;margin:auto}" +
            "  h1{color:#7b52d4;margin-bottom:4px}" +
            "  p.sub{color:#a0a0b8;margin-bottom:32px}" +
            "  h3{color:#f0b429;border-bottom:1px solid #2d1b69;padding-bottom:8px}" +
            "  .ep{background:#1a1a2e;border:1px solid #2d1b69;border-radius:12px;padding:16px 20px;margin:12px 0}" +
            "  code{color:#f0b429;font-size:.95rem}" +
            "  .desc{color:#a0a0b8;font-size:.85rem;margin-top:6px}" +
            "  .badge{background:#2d1b69;color:#b39ee0;font-size:.75rem;padding:3px 10px;border-radius:20px;font-weight:700}" +
            "</style></head>" +
            "<body>" +
            "<h1>🎓 MemberSearch API</h1>" +
            "<p class='sub'>Kelas 2KA09 · Sistem Informasi · FIKTI · Universitas Gunadarma</p>" +
            "<span class='badge'>Port " + PORT + "</span>" +
            "<h3 style='margin-top:32px'>Endpoint Tersedia</h3>" +
            "<div class='ep'>" +
            "  <code>GET /api/members</code>" +
            "  <p class='desc'>Mengembalikan seluruh data 33 anggota kelas dalam format JSON.</p>" +
            "</div>" +
            "<div class='ep'>" +
            "  <code>GET /api/search?q={keyword}</code>" +
            "  <p class='desc'>Mencari anggota berdasarkan <b>nama</b> atau <b>NPM</b>. " +
            "  Pencarian tidak peka huruf besar/kecil (case-insensitive).</p>" +
            "</div>" +
            "</body></html>";

        byte[] bytes = html.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "text/html; charset=UTF-8");
        addCorsHeaders(exchange);
        exchange.sendResponseHeaders(200, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }

    // ─── Util: Konversi data member ke JSON string ─────────────
    private static String memberToJson(String[] m) {
        return "{" +
               "\"id\":"      + m[0]                           + "," +
               "\"name\":\""  + escapeJson(m[1])               + "\"," +
               "\"npm\":\""   + m[2]                           + "\"," +
               "\"photo\":\"" + "images/members/member-" + m[0] + ".jpg\"" +
               "}";
    }

    // ─── Util: Kirim respons JSON ──────────────────────────────
    private static void sendJson(HttpExchange ex, int status, String json) throws IOException {
        byte[] bytes = json.getBytes(StandardCharsets.UTF_8);
        addCorsHeaders(ex);
        ex.getResponseHeaders().set("Content-Type", "application/json; charset=UTF-8");
        ex.sendResponseHeaders(status, bytes.length);
        try (OutputStream os = ex.getResponseBody()) {
            os.write(bytes);
        }
    }

    // ─── Util: Tambahkan CORS headers ─────────────────────────
    private static void addCorsHeaders(HttpExchange ex) {
        ex.getResponseHeaders().set("Access-Control-Allow-Origin",  ORIGIN);
        ex.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, OPTIONS");
        ex.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type");
    }

    // ─── Util: Ambil nilai query parameter ──────────────────────
    private static String parseQueryParam(HttpExchange ex, String key) {
        String raw = ex.getRequestURI().getRawQuery();
        if (raw == null) return "";
        for (String pair : raw.split("&")) {
            String[] kv = pair.split("=", 2);
            if (kv.length == 2 && kv[0].equals(key)) {
                try {
                    return URLDecoder.decode(kv[1], StandardCharsets.UTF_8.name()).trim();
                } catch (Exception e) {
                    return kv[1].trim();
                }
            }
        }
        return "";
    }

    // ─── Util: Escape karakter khusus JSON ────────────────────
    private static String escapeJson(String s) {
        return s.replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\n", "\\n")
                .replace("\r", "\\r");
    }

    // ─── Util: Cek apakah request adalah GET ──────────────────
    private static boolean isGet(HttpExchange ex) {
        return "GET".equalsIgnoreCase(ex.getRequestMethod());
    }

    // ─── Util: Log request ke konsol ──────────────────────────
    private static void logRequest(String type, String detail) {
        System.out.printf(" ✔  [%-12s]  %s%n", type, detail);
    }

    // ─── Banner startup di konsol ─────────────────────────────
    private static void printBanner() {
        System.out.println();
        System.out.println("  ┌─────────────────────────────────────────────────┐");
        System.out.println("  │         MemberSearch Server — Kelas 2KA09       │");
        System.out.println("  │   Universitas Gunadarma  ·  Sistem Informasi    │");
        System.out.println("  ├─────────────────────────────────────────────────┤");
        System.out.printf ("  │  Berjalan di  →  http://localhost:%d            │%n", PORT);
        System.out.println("  │                                                 │");
        System.out.println("  │  GET /api/members          Semua anggota kelas  │");
        System.out.println("  │  GET /api/search?q={kata}  Cari nama / NPM      │");
        System.out.println("  ├─────────────────────────────────────────────────┤");
        System.out.println("  │  Tekan Ctrl+C untuk menghentikan server.        │");
        System.out.println("  └─────────────────────────────────────────────────┘");
        System.out.println();
    }
}