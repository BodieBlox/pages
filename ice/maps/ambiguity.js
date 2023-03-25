var map = {
    title: "Ambiguity",
    song: "env2",
    maker: "David Ye",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([-4.99993, 0.00007000000000000001, -31.99993], [0.35, 0, 0], [1, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([0.00021, 0.00021, -51.999790000000004], [0, 0, 0], [4, 2, 24], "1", 0, 0, 0.6, false, false);
        a.e([10.00035, 2.00035, -21.999650000000003]);
        a.e([-23.07951, 2.00049, -44.99951]);
        a.e([-12.999929999999999, 2.00007, -148.48993000000002]);
        a.e([-21.999789999999997, 2.00021, -69.99979]);
        a.p([-7.99965, 0.00035000000000000005, -79.99965], [-0.35, 0, 0], [30, 2, 14], "1", 0, 0, 0.6, false, false);
        a.e([-20.62951, 8.03049, -84.75950999999999]);
        a.c([-0.99993, 1.6600700000000002, -139.99993], "-1.0");
        a.c([-1.99986, 1.6601399999999997, -139.99986], "-1.0");
        a.c([-2.99979, 1.6602100000000002, -139.99979], "-1.0");
        a.p([-19.99972, 0.00028000000000000003, -109.99972], [0, 0, 0], [12, 2, 50], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.00035000000000000005, 0.00035000000000000005, -7.99965], [0, 0, 0], [6, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([7.00042, 0.00042, -19.99958], [0.52, 0, 0], [10, 2, 1], "1", 0, 0, 0.6, false, false);
        a.p([-11.99951, 0.00049, -39.99951], [-0.52, 0, 0], [28, 2, 2], "1", 0, 0, 0.6, false, false);
        a.p([-20, 0, -148.49], [0, 0, 0], [2, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([-9.99993, 0.00007000000000000001, -133.48993000000002], [0, 0, 0], [20, 2, 10], "1", 0, 0, 0.6, false, false);
        a.p([-12.999860000000002, 0.00014000000000000001, -142.99986], [0, 0, 0], [1, 2, 16], "1", 0, 0, 0.6, false, false);
        a.p([2.50021, 0.00021, -19.99979], [-1.57, 0, 0], [10, 2, 1], "1", 0, 0, 0.6, false, false);
        a.p([2.00028, 0.00028000000000000003, -143.48972], [0, 0, 0], [10, 2, 10], "1", 0, 0, 0.6, false, false);
        a.p([-19.99965, 0.00035000000000000005, -76.99965], [0, 0.79, 0], [2, 2, 20], "1", 0, 0, 0.6, false, false);
        a.e([0.00042, 2.00042, -143.48958000000002]);
    },
    post: function() {
        a.u('P0');
        a.u('P1');
        a.u('E0');
        a.u('E1');
        a.u('E2');
        a.u('E3');
        a.u('P2');
        a.u('E4');
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -13.999860000000002) {
                    this.section_id += 1
                }
                break;
            case 1:
                a.mov('P0', 'x', 1.5);
                if (PZ < -15.999860000000002) {
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -18.99958) {
                    this.section_id += 1
                }
                break;
            case 3:
                a.mov('E0', 'x', 5.0);
                if (PZ < -20.99958) {
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -37) {
                    this.section_id += 1
                }
                break;
            case 5:
                a.mov('E1', 'z', 2.0);
                if (PZ < -39) {
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -38.99972) {
                    this.section_id += 1
                }
                break;
            case 7:
                a.mov('P1', 'x', -4.0);
                if (PZ < -40.99972) {
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -55.999579999999995) {
                    this.section_id += 1
                }
                break;
            case 9:
                a.mov('P2', 'z', 5.0);
                if (PZ < -57.999579999999995) {
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -64.99972) {
                    this.section_id += 1
                }
                break;
            case 11:
                a.mov('E3', 'x', -3.0);
                if (PZ < -66.99972) {
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -81) {
                    this.section_id += 1
                }
                break;
            case 13:
                a.mov('E4', 'y', 1.0);
                if (PZ < -83) {
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -146.99986) {
                    this.section_id += 1
                }
                break;
            case 15:
                a.mov('E2', 'x', -2.5);
                if (PZ < -148.99986) {
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [-4.99993, 0.00007000000000000001, -31.99993], [0.35, 0, 0], [1, 2, 20]);
        a.re('P1', [0.00021, 0.00021, -51.999790000000004], [0, 0, 0], [4, 2, 24]);
        a.re('E0', [10.00035, 2.00035, -21.999650000000003], [0, 0, 0], [1, 1, 1]);
        a.re('E1', [-23.07951, 2.00049, -44.99951], [0, 0, 0], [1, 1, 1]);
        a.re('E2', [-12.999929999999999, 2.00007, -148.48993000000002], [0, 0, 0], [1, 1, 1]);
        a.re('E3', [-21.999789999999997, 2.00021, -69.99979], [0, 0, 0], [1, 1, 1]);
        a.re('P2', [-7.99965, 0.00035000000000000005, -79.99965], [-0.35, 0, 0], [30, 2, 14]);
        a.re('E4', [-20.62951, 8.03049, -84.75950999999999], [0, 0, 0], [1, 1, 1]);
        a.re('C0', [-0.99993, 1.6600700000000002, -139.99993], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [-1.99986, 1.6601399999999997, -139.99986], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [-2.99979, 1.6602100000000002, -139.99979], [0, 0, 0], [2, 2, 2]);
        a.re('P3', [-19.99972, 0.00028000000000000003, -109.99972], [0, 0, 0], [12, 2, 50]);
        a.re('P4', [0.00035000000000000005, 0.00035000000000000005, -7.99965], [0, 0, 0], [6, 2, 20]);
        a.re('P5', [7.00042, 0.00042, -19.99958], [0.52, 0, 0], [10, 2, 1]);
        a.re('P6', [-11.99951, 0.00049, -39.99951], [-0.52, 0, 0], [28, 2, 2]);
        a.re('P7', [-20, 0, -148.49], [0, 0, 0], [2, 2, 20]);
        a.re('P8', [-9.99993, 0.00007000000000000001, -133.48993000000002], [0, 0, 0], [20, 2, 10]);
        a.re('P9', [-12.999860000000002, 0.00014000000000000001, -142.99986], [0, 0, 0], [1, 2, 16]);
        a.re('P10', [2.50021, 0.00021, -19.99979], [-1.57, 0, 0], [10, 2, 1]);
        a.re('P11', [2.00028, 0.00028000000000000003, -143.48972], [0, 0, 0], [10, 2, 10]);
        a.re('P12', [-19.99965, 0.00035000000000000005, -76.99965], [0, 0.79, 0], [2, 2, 20]);
        a.re('E5', [0.00042, 2.00042, -143.48958000000002], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}