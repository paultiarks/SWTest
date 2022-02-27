//
//  ViewController.swift
//  SWTest
//
//  Created by Paul Tiarks on 2/27/22.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func remotelyLoadedTapped() {
        let example = ExampleViewController(displayMode: .remote)
        self.navigationController?.pushViewController(example, animated: true)
    }

    @IBAction func locallyLoadedTapped() {
        let example = ExampleViewController(displayMode: .local)
        self.navigationController?.pushViewController(example, animated: true)
    }
}

